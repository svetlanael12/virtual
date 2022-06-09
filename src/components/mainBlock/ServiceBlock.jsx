import React from "react";
import CardInfo from "./card-info/CardInfo";
import './style/ServiceBlock.css';
import iconManagement from './card-info/svg/management.svg';
import iconSocial from './card-info/svg/social.svg';
import iconCrypto from './card-info/svg/crypto.svg';
import iconSmart from './card-info/svg/smart.svg';
import iconAnalyzer from './card-info/svg/analyzer.svg';
import iconPrice from './card-info/svg/price.svg';


const ServiceBlock = () => {
  return (
    <div className="service-block">
      <h2 className="service__title">Our Service</h2>
      <p className="service__subtitle">
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </p>
      <div className="card-block">
        <CardInfo
          title="Order Management"
          text="Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          url={iconManagement}
        />
        <CardInfo
          title="Social Assistant"
          text="Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          url={iconSocial}
        />
        <CardInfo
          title="Crypto Platform"
          text="Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          url={iconCrypto}
        />
        <CardInfo
          title="Smart Trading Modules"
          text="Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          url={iconSmart}
        />
        <CardInfo
          title="Analyzer of the News"
          text="Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          url={iconAnalyzer}
        />
        <CardInfo
          title="Module of Price Notification"
          text="Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          url={iconPrice}
        />
      </div>
    </div>
  );
};

export default ServiceBlock;
