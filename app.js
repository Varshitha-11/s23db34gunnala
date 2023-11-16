var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Devices = require("./models/Devices");
var resourceRouter = require("./routes/resource");
var Devices1Router = require("./routes/Devices1");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true

  });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resource', resourceRouter);
app.use('/Devices', Devices);
app.use('/Devices1', Devices1Router);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

// We can seed the collection if needed onserver start
async function recreateDB() {
  // Delete everything
  await Devices.deleteMany();
  let instance1 = new
    Devices({
      name: "Laptop", color: 'Pink',
      ram: 250
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });


  let instance2 = new
    Devices({
      name: "Tv", color: 'Bule',
      ram: 128
    });
  instance2.save().then(doc => {
    console.log("secound object saved")
  }
  ).catch(err => {
    console.error(err)
  });

  let instance3 = new
    Devices({
      name: "Hp", color: 'Red',
      ram: 250
    });
  instance3.save().then(doc => {
    console.log("Thired object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;
