const userModels = require('../models/models')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getIndex: (req, res) => {
    return res.json({ message: 'Hello' })
  },
//tentukan mau pake kolbek atau promes
  // Using Callback
  // getUsers: (req, res) => {
  //   userModels.getUsers((err, result) => {
  //     if (err) console.log(err)

  //     // res.json(result)
  //     MiscHelper.response(res, result, 200)
  //   })
  // },//lakukan juga di method lain yang udah aku bikin ya tapi nanya orang duilu jangan sok tau ih

  // Using Promise
  // userDetail: (req, res) => {
  //   const userid = req.params.userid

  //   userModels.userDetail(userid)
  //     .then((resultUser) => {
  //       const result = resultUser[0]
  //       MiscHelper.response(res, result, 200)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  // updateUser: async (req, res) => {//ga usah pakai async await bangsat

  // },

  getAllBook: (req, res) => {
    // const userid = req.params.userid

    userModels.getAllBook((err, result) => {
      if (err) console.log(err)
      MiscHelper.response(res, result, 200)

    })
  },
  getLocation: (req, res) => {
    
    userModels.getLocation((err, result) => {
      if (err) console.log(err)
      MiscHelper.response(res, result, 200)

    })
  },
  getCategory: (req, res) => {
    
    userModels.getCategory((err, result) => {
      if (err) console.log(err)
      MiscHelper.response(res, result, 200)

    })
  },
  getBookId: (req, res) => {
    const userid = req.params.userid

    userModels.getBookId(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getBookName: (req, res) => {
    const name = req.params.name

    userModels.getBookName(name)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getBookCategory: (req, res) => {
    const name = req.params.name

    userModels.getBookCategory(name)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getBookLocation: (req, res) => {
    const name = req.params.name

    userModels.getBookLocation(name)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getBookComplete: (req, res) => {
    const userid = req.params.userid

    userModels.userDetail(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  bookDelete: (req, res) => {
    const userid = req.params.userid

    userModels.userDetail(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  bookUpdate: (req, res) => {
    const userid = req.params.userid

    userModels.userDetail(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  bookPost: (req, res) => {
    const userid = req.params.userid

    userModels.userDetail(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
