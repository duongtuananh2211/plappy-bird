class BaseContext {
  getContext = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    return context;
  };
}
