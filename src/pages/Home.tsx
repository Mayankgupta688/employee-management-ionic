import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FunctionComponent = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>This is the Header for Functional Component</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Hi All This is Sample Application
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            Click Here for Docs
          </a>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
