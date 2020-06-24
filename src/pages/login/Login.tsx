import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton href="/home">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
