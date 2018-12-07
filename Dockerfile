FROM ruby:latest

EXPOSE 4000

RUN mkdir /app
WORKDIR /app

ADD ./Gemfile /app
RUN bundle install

VOLUME /app

CMD ["jekyll", "serve", "--host", "0.0.0.0"]

