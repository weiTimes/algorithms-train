function apiToRenderDom(apis) {
  apis.forEach(function (api) {
    setTimeout(() => {
      get(api).then((res) => {
        render(res);
      });
    }, 0);
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    resolve(id);
  });
}
function render(id) {
  console.log(`渲染dom-${id}`);
}

apiToRenderDom(['api1', 'api2', 'api3']);
