// 参数适配
(function() {
  //原函数
  // function doSomething(name, title, age, color, size, prize) {};
  
  //添加了适配的函数
  function doSomething(obj) {
    var _adapter = {
      name: 'name',
      title: 'title',
      age: 0,
      color: 'white',
      size: 0,
      prize: 0
    };

    for(var key in _adapter) {
      _adapter[key] = obj[key] || _adapter[key];
    }
  };
})();