const paginate = async (Model, page = 1, pageSize = 10) => {
  try {
    const totalData = await Model.countDocuments();
    const totalPages = Math.ceil(totalData / pageSize);

    const documents = await Model.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();

    return {
      page,
      pageSize,
      totalPages,
      totalData,
      data: documents,
    };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = paginate;
