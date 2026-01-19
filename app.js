const chart = echarts.init(document.getElementById('chart'));

fetch('./data.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error('Erro ao carregar data.json');
    }
    return res.json();
  })
  .then((treeData) => {
    const transformedData = transformLinks(treeData);
    initChart(transformedData);
  })
  .catch((err) => {
    console.error(err);
  });

function transformLinks(node) {
  const newNode = { name: node.name };

  if (node.description) {
    newNode.description = node.description;
  }

  // If node has links array, convert them to children
  if (node.links && Array.isArray(node.links)) {
    newNode.children = node.links.map((link) => ({
      name: link.label,
      url: link.url,
      description: link.description,
    }));
  }

  // If node has children, recursively transform them
  if (node.children && Array.isArray(node.children)) {
    const transformedChildren = node.children.map((child) =>
      transformLinks(child),
    );

    // Merge with any children created from links
    if (newNode.children) {
      newNode.children = [...transformedChildren, ...newNode.children];
    } else {
      newNode.children = transformedChildren;
    }
  }

  return newNode;
}

function initChart(data) {
  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: (params) => {
        const { url, description } = params.data || {};
        let tooltip = params.name;
        if (description) {
          tooltip += `<br/><span style="color:#94a3b8; font-size:12px">${description}</span>`;
        }
        if (url) {
          tooltip +=
            '<br/><span style="color:#38bdf8">Clique para abrir</span>';
        }
        return tooltip;
      },
    },
    zoomOnMouseWheel: true,
    moveOnMouseMove: true,
    moveOnMouseWheel: true,
    series: [
      {
        type: 'tree',
        roam: 'move',
        data: [data],
        orient: 'LR',
        expandAndCollapse: true,
        symbolSize: 12,
        animationDuration: 750,
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 14,
          formatter: (params) =>
            params.data.url ? `🔗 ${params.name}` : params.name,
        },
        itemStyle: {
          color: (params) => (params.data.url ? '#38bdf8' : '#94a3b8'),
        },
        lineStyle: {
          color: '#475569',
        },
      },
    ],
  };

  chart.setOption(option);

  chart.on('click', (params) => {
    const { url } = params.data || {};
    if (url) {
      window.open(url, '_blank');
    }
  });
}

// Responsivo
window.addEventListener('resize', () => {
  chart.resize();
});
