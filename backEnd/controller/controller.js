const Company_Info = require("../model/companyInfo");

exports.viewData = (req, res) => {
  let query = req.query.query;
  // here we made our aggregation query
  const agg = [
    { $search: { autocomplete: { query: query, path: "name" } } },
    { $limit: 5 },
    { $project: { _id: 0, name: 1, domain: 1, logo: 1 } },
  ];
  // executing aggregation and send sending the aggregated data in json format
  Company_Info.aggregate(agg)
    .then((data) => {
      res.json({ message: data });
    })
    .catch((err) => {
      console.log(`Error from View data: ${err}`);
    });
};
