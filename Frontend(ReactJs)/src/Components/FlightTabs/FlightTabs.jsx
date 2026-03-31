import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function FlightTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function allOffers() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    const cards = [
      {
        id: 1,
        title: "Plants",
        description: "Plants are essential for all life.",
      },
      {
        id: 2,
        title: "Animals",
        description: "Animals are a part of nature.",
      },
      {
        id: 3,
        title: "Humans",
        description: "Humans depend on plants and animals for survival.",
      },
    ];
    return (
      <>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card key={card.id}>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </>
    );
  }
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="allOffers" value="1" />
            <Tab label="flights" value="2" />
            <Tab label="hotels" value="3" />
            <Tab label="holidays" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{allOffers()} </TabPanel>
        <TabPanel value="2">Flights</TabPanel>
        <TabPanel value="3">Hotels</TabPanel>
        <TabPanel value="4">Holidays</TabPanel>
      </TabContext>
    </Box>
  );
}
