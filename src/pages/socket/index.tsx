import React, { useState, useEffect } from 'react';
import { Client } from 'paho-mqtt';

const host = "hairdresser.cloudmqtt.com";
const port = 37615;
const id = "ceamazon_" + new Date().getUTCMilliseconds();

const client = new Client(host, port, id);

function Socket() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const options = {
      userName: 'xldvnagx',
      password: 'hD23-LNVOrD8',
      onSuccess: () => {
        setIsConnected(true);
      },
      onFailure: () => {
        setIsConnected(false);
      },
      useSSL: true,
  
      // informe aqui o caminho do certificado SSL do servidor MQTT
      ssl: {
        rejectUnauthorized: false,
      },
    };

    client.connect(options);

    return () => {
      if (client.isConnected()) {
        client.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {isConnected ? (
        <p>Conectado ao servidor MQTT!</p>
      ) : (
        <p>Não foi possível conectar ao servidor MQTT.</p>
      )}
    </div>
  );
}

export default Socket;


