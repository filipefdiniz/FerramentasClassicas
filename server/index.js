const express = required('express');
const session = require('express-session');
const fileupload = require('fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
var path = require('path');

const port = 5000;