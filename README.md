OpenShift - Vert.x QuickStart  [![Build Status](https://travis-ci.org/engapa/openshift-vertx-quickstart.png)](https://travis-ci.org/engapa/openshift-vertx-quickstart)
=============================
***

This git repository helps you get up and running quickly with a [Vert.x](https://github.com/purplefox/vert.x) 2.0.1 installation on OpenShift.

Create a Do It Yourself (DIY) app on OpenShift
----------------------------------------------
<a href="mailto:engapa@aurigae.com">Contact with PDI PaaS to create an account</a> and install the <a href="https://www.openshift.com/get-started">command-line client tools</a>.

Create a DIY application:

    rhc app create -a vertx -t diy-0.1

Get Vert.x running
----------------------------
Grab this quickstart project and make it work for you!

    cd vertx
    git remote add upstream -m master http://pdihub.com/egp30/openshift-vertx-quickstart.git
    git pull -s recursive -X theirs upstream master
    git push

That's it, you can now checkout your Vert.x at:

    http://vertx-$yournamespace.rhcloud.com


Forking this Quickstart to use a newer Vertx version
-----------------------------------------------------
See [here](HowToUpdate.md) for information.

License
-------
This code is dedicated to the PDI domain
