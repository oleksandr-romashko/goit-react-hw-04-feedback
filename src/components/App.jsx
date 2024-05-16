import Page from 'components/Page/Page';
import Header from './Header/Header';
import Notification from './Notification/Notification';
import FeedbackWidget from 'components/FeedbackWidget/FeedbackWidget';
import Section from './Section/Section';

const INFO_MESSAGE = "Our cafe cares about our customers and want to know your opinion about our services";

const App = () => {
  return (
    <Page>
      <Header>Expresso Cafe</Header>
      <Section>
        <Notification message={INFO_MESSAGE} />
      </Section>
      <FeedbackWidget />
    </Page>
  );
};

export default App;
