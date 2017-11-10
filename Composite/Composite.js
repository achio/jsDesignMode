(function() {
  var News = function() {
    this.childrens = [];
    this.element = null;
  }

  News.prototype = {
    init: function() {
      throw new Error('请重写你的方法.');
    },
    add: function() {
      throw new Error('请重写你的方法.');
    },
    getElement: function() {
      throw new Error('请重写你的方法.');
    }
  }

  var inheritObject = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  }

  function inheritPrototype(subClass, superClass) {
    var p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
  }

  var Container = function(id, parent) {
    News.call(this);

    this.id = id;
    this.parent = parent;
    this.init();
  }
  inheritPrototype(Container, News);

  Container.prototype.init = function() {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
  }

  Container.prototype.add = function(child) {
    this.childrens.push(child);
    this.element.appendChild(child.getElement());
    return this;
  }

  Container.prototype.getElement = function() {
    return this.element;
  }

  Container.prototype.show = function() {
    this.parent.appendChild(this.element);
  }

  var Item = function(classname) {
    News.call(this);
    this.classname = className || '';
    this.init();
  }
  inheritPrototype(Item, News);

  Item.prototype.init = function() {
    this.element = document.createElement('li');
    this.element.className = this.classname;
  }

  Item.prototype.add = function(child) {
    this.childrens.push(child);
    this.element.appendChild(child.getElement());
    return this;
  }

  Item.prototype.getElement = function() {
  	return this.element;
  }

  var NewsGroup = function(classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
  }
  inheritObject(NewsGroup, News);

  NewsGroup.prototype.init = function() {
    this.element = document.createElement('div');
    this.element.className = this.classname;
  }

  NewsGroup.prototype.add = function(child) {
  	this.childrens.push(child);
  	this.element.appendChild(child.getElement());
  	return this;
  }

  NewsGroup.prototype.getElement = function() {
  	return this.element;
  }

  var ImageNews = function(url, href, classname) {
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.classname = classname || 'normal';
    this.init();
  }
  inheritPrototype(ImageNews, News);

  ImageNews.prototype.init = function() {
  	this.element = document.createElement('a');
  	var img = new Image();
  	img.src = this.url;
  	this.element.appendChild(img);
  	this.element.className = 'image-news' + this.classname;
  	this.element.href = this.href;
  }

  ImageNews.prototype.add = function() {}
  ImageNews.prototype.getElement = function() {
    return this.element;
  }

  var IconNews = function(text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
  }
})();



(function() {
  var TableList = function() {
  	this.childrens = [];
  	this.element = null;
  }

  TableList.prototype.init = function() {
    throw new Error('');
  }
  TableList.prototype.add = function() {
    throw new Error('');
  }
  TableList.prototype.getElement = function() {
    throw new Error('');
  }

  var TableHead = function() {
  	TableList.call(this);
  }

  TableHead.init = function() {
    this.element = document.createElement('thead');
    this
  }
})();