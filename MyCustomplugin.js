// MyCustomPlugin.js

class MyCustomPlugin {
  constructor(options) {
    // 생성자에서 옵션을 받을 수 있음
    this.options = options || {};
  }

  apply(compiler) {
    // apply 메서드는 웹팩 컴파일러에 의해 호출
    compiler.hooks.emit.tapAsync("MyCustomPlugin", (compilation, callback) => {
      // 빌드 후에 실행되는 로직을 작성
      console.log("MyCustomPlugin is running...");

      // 예제로 간단한 텍스트 파일을 생성
      compilation.assets["custom-file.txt"] = {
        source: () => "Hello, Webpack 5!",
        size: () => 18,
      };

      // 콜백을 호출하여 비동기 작업이 완료되었음을 알림
      callback();
    });
  }
}

module.exports = MyCustomPlugin;
