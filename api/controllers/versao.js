module.exports = () => {
  const controller = {};

  controller.get = (req, res) => {
    const responseString = `Bia ${process.env.VERSAO_API || "2.0.4"}`;
    res.send(responseString);
  };
  return controller;
};
