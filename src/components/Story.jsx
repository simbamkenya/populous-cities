import { useState, useEffect, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import { max, select, scaleBand, scaleLinear } from "d3";
import Globe from "./Globe";
import mapboxgl from "mapbox-gl";

function Story(props) {
  const { citiesData } = props;
  const styles = {
    graphicContainer: {
      padding: "5vh 2vw 20vh",
      display: "flex",
      justifyContent: "space-between",
    },
    graphic: {
      flexBasis: "60%",
      backgroundColor: "green",
      position: "sticky",
      width: "100%",
      height: "100vh",
      top: "0vh",
      backgroundColor: "#aaa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& p": {
        fontSize: "5rem",
        fontWeight: 700,
        textAlign: "center",
        color: "#fff",
      },
    },
    scroller: {
      flexBasis: "35%",
    },
    step: {
      margin: "0 auto 2rem auto",
      padding: "80px 0",
      border: "1px solid gray",
      "& p": {
        textAlign: "center",
        padding: "1rem",
        fontSize: "1.8rem",
        margin: 0,
      },
      "&:last-child": {
        marginBottom: 0,
      },
    },
    button: {
      backgroundColor: "#3773ac",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      padding: "6px",
      textAlign: "center",
      display: "block",
      maxWidth: 220,
      margin: "10px auto 30px",
      fontSize: 19,
      lineHeight: "28px",
      textDecoration: "none",
    },
  };

  const [data, setData] = useState({});
  const [steps, setSteps] = useState(citiesData);
  const map = useRef(null);

  useEffect(() => {}, []);
  const onStepEnter = (e) => {
    const { data, entry, direction } = e;
    setData(data);

    map.current?.flyTo({
      center: [data.longitude, data.latitude],
      essential: true,
    });
    new mapboxgl.Marker()
      .setLngLat([data.longitude, data.latitude])
      .addTo(map.current);
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "up" && data === steps[0]) {
      setData(0);
    }
  };

  return (
    <div>
      <h1 className="text-base text-white  md:text-4xl px-4 pt-2 text-bold uppercase">Top 10 most populous cities</h1>
      <div style={styles.graphicContainer}>
        <div style={styles.scroller}>
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            offset="400px"
            // debug
          >
            {steps.length &&
              steps.map((city, index) => {
                const { img } = city;
                const isVisible = city === data;
                const visibility = isVisible ? "visible" : "hidden";
                return (
                  <Step data={city} key={city.name} style={visibility}>
                    <div style={styles.step} className="bg-[#1e1e1e] rounded">
                      <div className="text-white">
                        <img src={img} className="bg-cover"></img>
                        <div className="space-y-2 border-l-4 pl-2 ml-2 my-auto mt-4">
                          <p className="text-3xl">City: {city.name}</p>
                          <p className="text-3xl">Rank: {index + 1}</p>
                          <p className="text-3xl">
                            Population: {(city.population / 1000000).toFixed(1)}{" "}
                            Million
                          </p>
                        </div>
                      </div>
                    </div>
                  </Step>
                );
              })}
          </Scrollama>
        </div>
        <div style={styles.graphic}>
          <Globe data={data} map={map} />
        </div>
      </div>
    </div>
  );
}

export default Story;
