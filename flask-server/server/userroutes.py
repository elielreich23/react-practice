import os, random, string, requests
from flask import render_template, redirect, flash, session, request, url_for

from server import app


@app.route("/", methods = "GET", strict_slashes = False)
def Homepage():
    # return render_template("../todo-app/src/App.js")
    return "You Got Here!!"