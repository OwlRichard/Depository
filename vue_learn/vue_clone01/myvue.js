

class myvue {
    constructor(options){
        this.$options = options;

        // 数据响应化
        this.$data = options.data;
        this.observe(this.$data);

        // 测试Watcher创建
        new Watcher();
        this.$data.test;
        new Watcher();
        this.$data.foo.bar;
    }

    observe(value) {
        if(!value || typeof value !== 'object'){
            return;
        }

        // 遍历该对象
        Object.keys(value).forEach(key => {
            this.defineReactive(value, key, value[key])
        })
    }

    // 数据响应化
    defineReactive(obj, key, val) {

        this.observe(val); // 递归解决数据嵌套

        const dep = new Dep();

        Object.defineProperty(obj, key, {
            get(){
                Dep.target && dep.addDep(Dep.target);
                return val;
            },
            set(newVal) {
                if(newVal === val) {
                    return;
                }
                val = newVal;
                // console.log(`${key}属性更新了：${val}`);
                dep.notify();
            }
        })
    }
}

// Dep: 用来管理Watcher
class Dep {
    constructor() {
        // 存放依赖（watcher）,一个watcher对应一个属性
        this.deps = [];
    }

    addDep(dep) {
        this.deps.push(dep);
    }

    // 通知所有依赖更新
    notify() {
        this.deps.forEach(dep => dep.update())
    }
}

// Watcher
class Watcher {
    constructor() {
        // 将当前Watcher的实例指定到Dep静态属性target
        Dep.target = this;
    }

    update() {
        console.log('属性更新了watcher')
    }
}