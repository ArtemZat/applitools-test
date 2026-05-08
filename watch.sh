#!/bin/bash
cd /opt/jekyll-site
exec bundle exec jekyll build --watch --destination /opt/jekyll-site/_site
