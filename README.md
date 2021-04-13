<h1>Chat with your friends while watching a video together!</h1>

This is a video app, which lets people talk via video conferencing, and when ready, the moderator can switch to "Watch Party" mode and share their screen. The "Watch Party" mode will share the moderator's screen, put the site into dark mode and disable everyone's microphones and cameras. Participants can continue to chat via text.

<h2>Requirements</h2>
This app requires Ruby v2.5 or greater and Rails 6.0 or greater.

<h2>Installation</h2>
Once you clone the repository, first change into the directory and execute the following commands in your terminal:
<br>

```ruby
bundle install
yarn install
rake db:migrate
```

Lastly, rename the ```.env.sample``` file to ```.env``` if needed.

<h3>A Note on extra gems:</h3>

This app makes use of the following 

```#Added gems```: ```gem 'dotenv-rails'``` ```gem "opentok"```. Please make sure to have these in your  ```Gemfile``` and bundle install. ```'dotenv-rails'``` is used to help keep your API tokens and secrets safe. ```"opentok"``` is actually the name of the company that produced this API before being incorporated by Vonage.

<h3>Usage</h3>

To use this app you must sign up for an account with the Vonage Video API. Once you have an account, you can create a new video project. That project will assign you a project level API key and secret. Copy those values into your ```.env``` file in the ```API_KEY``` and ```API_SECRET``` parameters, respectively.

You also must define a moderator name, which will be used to provide one user with moderator privileges. Those privileges include the ability to switch between video chat and screen share modes. You can define that name in the ```.env``` file within the ```MODERATOR_NAME``` value.

Lastly, you must set a ```PARTY_PASSWORD``` in your environment variables. This password will be used to allow participants into the application. You can define that value in the ```.env``` file within the ```PARTY_PASSWORD``` key.

Once you have done that, you can start your app locally by running ```bundle exec rails s``` from the command line and navigate to ```localhost:3000``` in your web browser.

<h2>Customizing the App</h2>

The app reads from ```/config/site_info.yml``` to gather data such as the website title and the various textual elements of the site. This is entirely customizable.

To edit the data open up ```/config/site_info.yml``` in your code editor. The following options are available:

```ruby
lang: # The ISO 2 letter language code of the site, for example en for American English or he for Hebrew
lang_direction: # The language direction of the text, values can be either rtl or ltr
landing_page:
  welcome_message:
    text: # The landing page welcome message, any string of text
  name_form:
    text: # The text in the form asking for the name of the participant, any string of text
    name_placeholder_text: # The placeholder for the name text field, any string of text
    password_placeholder_text: # The placeholder for the password text field, any string of text
    submit_button_text: # The text for the name form submit button, any string of text
navbar:
  title:
    text: # The title in the navigation bar, any string of text
text_chat:
  submit_button_text: # The text for the chat form submit button, any string of text
  placeholder_text: # The placeholder text for the chat form text form, any string of text
 ```
 
If you do not edit the data in the site_info.yml, the defaults in the file in this repository will be rendered.

<h2>Deploying to Heroku</h2>
<br>

```ruby
heroku login -i
heroku create $YOUR_APP_NAME --region us
git remote -v
git push heroku master
heroku run rails db:migrate
```

Once you do that you still must set your Vonage OpenTok API credentials and information in Heroku. You can either do so at the time you are initializing your application after you have run the commands above, or after from within the Heroku Dashboard.

After you have deployed to Heroku, you will see three config vars in the Heroku deployment settings. Add your Vonage OpenTok API credentials and moderator name in the appropriate value box for each key before clicking the final Deploy app button. This will ensure your application is deployed to Heroku with your information.

Alternatively, you can do so from with your Heroku Dashboard's application settings by managing the config vars for your Video Watch Party app after deploying. You will need to add the four environment variables: ```OPENTOK_API_KEY```, ```OPENTOK_API_SECRET```, ```MODERATOR_NAME```, ```PARTY_PASSWORD```.

<h4>Heroku Pro Tip: Continuous Delivery</h4>
<br>
You can configure your Heroku app to automatically build and deploy the latest version of your app whenever a new commit is made on your master branch. Which means, your Heroku app will always be in sync with your master. No more git push heroku master and having to wait for the build to complete. A new Heroku build will automatically be triggered after a pull request is merged.
:check: Here's how to set this up:
<br>
<ol>
  <li>- In your Heroku app's dashboard, select the Deploy tab</li>
  <li>- In Deployment method, select GitHub</li>
  <li>- Search and connect your project repository (you might have to first allow Heroku to access your GitHub account)</li>
  <li>- Click on Enable Automatic Deploys</li>
</ol>
