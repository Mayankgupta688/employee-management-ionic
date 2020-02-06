import React, {useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Axios from "axios";

const App: React.FC = () => {

  const [employeeList, setEmployeeList] = useState([]);

  function getData() {

    Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response: any) => {
      setEmployeeList(response.data)
    })
  }

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

          <input type="button" onClick={getData} value="Get Data" />
        </p>

        {employeeList != null && employeeList.map((emp) => {
          return (
            <>
              <h1>{emp["name"]}</h1>
            </>
          )
        })}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>This is Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  )
};

export default App;
