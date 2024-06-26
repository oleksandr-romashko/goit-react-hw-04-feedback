# Feedback Widget

## goit-react-hw-04-feedback 

This is refactored application [goit-react-hw-02-feedback](https://github.com/oleksandr-romashko/goit-react-hw-02-feedback) using React hooks instead of classes.

This is a homework for React events, state, forms and React hooks topics. 

## Live page

The live page for this repository can be viewed at [GitHub Pages](https://oleksandr-romashko.github.io/goit-react-hw-02-feedback/).

## Local build and run

  1. Make sure you have an LTS version of Node.js installed on your computer. [Download and install](https://nodejs.org/en/) if needed.
  1. Install the project's base dependencies with the `npm install` command.
  1. Start development mode by running the `npm start` command.
  2. Go to [localhost:3000](http://localhost:3000/) in your browser. This page will automatically reload after saving changes to the project files.

## Tasks Acceptance Criteria

[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md) is used as a starting point for your application (more information about how to start-up with such a project may be found at the template repo description or [here in a Readme file](./README.en.md)).

  * The `goit-react-hw-04-feedback` repository is created.
  * Refactor the "[Feedback Widget](https://github.com/oleksandr-romashko/goit-react-hw-02-feedback)" task code from the second module using React-hooks.
  * When submitting homework, there are two links: to the source files and the live page using `GitHub Pages'.
  * When visiting the work page (GitHub pages) of the assignment, there are no errors or warnings in the console.
  * For each component has a separate folder with a React-component file and styles.
  * The `propTypes` are described for all components.
  * Component names are clear, descriptive.

## Task - Feedback Widget

Like most companies, Expresso Cafe collects reviews from its customers. Your task is to create an application to collect statistics. There are only three options for feedback: good, neutral, and bad.

### Step 1

The app should display the number of reviews collected for each category. The app should not save review statistics between different sessions (page refresh).

The state of the application must be of the following form, no new properties must not be added.

```javascript
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

The interface might look like this.

<p align="left">
  <img max-width="960" src="./assets/tasks/step-1.png" alt="step-1 interface example component preview">
</p>

### Step 2

Expand the app's functionality so that the interface displays more statistics about the collected feedback. 
Add a display of the total number of collected reviews from all categories and the percentage of positive reviews. To do this, create helper methods `countTotalFeedback()` and `countPositiveFeedbackPercentage()` methods that calculate these values based on state data (computable data).

<p align="left">
  <img max-width="960" src="./assets/tasks/step-2.png" alt="step-2 interface example component preview">
</p>

### Step 3

Perform a refactoring of the application. The state of the application must remain in the `<App>` root component.

  * Put the statistics display in a separate component `<Statistics good={} neutral={} bad={} total={} positivePercentage={}`
  * Put the button box into a component `<FeedbackOptions options={} onLeaveFeedback={}`
  * Create a component `<Section title="">` that renders a section with title and (children). Wrap each of the `<Statistics>` and `<FeedbackOptions>` in the created section component.

### Step 4

Extend the functionality of the application so that the statistics block is rendered only after at least one feedback has been collected. The message about absence of statistics put in the component `<Notification message="There is no feedback">`.

<p align="left">
  <img max-width="960" src="./assets/tasks/step-4.gif" alt="step-2 interface example component preview">
</p>
