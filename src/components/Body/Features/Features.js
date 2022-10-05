import Feature from "./Feature/Feature"; 
import featuresData from "./featuresData.json"; 
import classes from "./Features.module.css"; 

const Features = () => {
  return (
    <div className={classes.features}>
      <div className={classes.textBox}>
        <h2 className={classes.title}>Advanced Statistics</h2>
        <p className={classes.paragraph}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className={classes.featuresBox}>
        {featuresData.map((feature, index) => <Feature key={index} index={index} title={feature.title} paragraph={feature.paragraph}/>)}
        <div className={classes.line}/>
      </div>
    </div>
  )
}

export default Features
