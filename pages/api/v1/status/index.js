const status = (request, response) => {
  response.status(200).json({
    status: 200,
    message: "API is working more than never!",
  });
};

export default status;
