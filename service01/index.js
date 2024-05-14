/**
 * Premier service web du cours programmation service web
 * Intro express et mongoose 
 * 
 * Fait par maxime chaput 
 * le 2024-05-14
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(4000, () => console.log('server demarrer sur le port 3000'))