import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxListSecondary({
  categoryType,
  setSelectedFilters,
}: {
  categoryType: string;
  setSelectedFilters: React.Dispatch<React.SetStateAction<[]>>;
}) {
  const [checked, setChecked] = React.useState([1]);
  const [priceList] = React.useState([
    { id: 1, label: "$0 - $50" },
    { id: 2, label: "$51 - $100" },
    { id: 3, label: "$101 - $200" },
    { id: 4, label: "$201 - $500" },
  ]);
  const [setPerfuleCollection] = React.useState([
    { id: 5, label: "Summer Collection" },
    { id: 6, label: "Winter Collection" },
    { id: 7, label: "Autumn Collection" },
    { id: 8, label: "Spring Collection" },
  ]);
  const [quantityList] = React.useState([
    { id: 9, label: "20 ML" },
    { id: 10, label: "50 ML" },
    { id: 11, label: "80 ML" },
    { id: 12, label: "100+ ML" },
  ]);

  const handleToggle = (value: { id: number; label: string }) => () => {
    // console.log("1 checked", checked);
    const currentIndex = checked.indexOf(value.id);
    const newChecked = [...checked];
    // console.log("2 Current newChecked:", currentIndex, checked, newChecked);

    if (currentIndex === -1) {
      newChecked.push(value.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // console.log("3 New newChecked:", newChecked);
    setChecked(newChecked);
    filteredValues();
  };
  const filteredValues = () => {
    checked.map((value) => {
      const selectedPrice = priceList.find((item) => item.id === value)?.label;
      const selectedPerfume = setPerfuleCollection.find(
        (item) => item.id === value
      )?.label;
      const selectedQuantity = quantityList.find(
        (item) => item.id === value
      )?.label;
      const selectedValues = [
        { priceFilter: selectedPrice },
        { perfumeCollectionFilter: selectedPerfume },
        { qunatityFilter: selectedQuantity },
      ];
      setSelectedFilters(selectedValues as []);
    });
  };

  const GenerateListItems = () => {
    let items: { id: number; label: string }[] = [];
    if (categoryType === "price") {
      items = priceList;
    } else if (categoryType === "perfumeCollection") {
      items = setPerfuleCollection;
    } else if (categoryType === "quantity") {
      items = quantityList;
    }

    return items.map((value) => {
      const labelId = `checkbox-list-secondary-label-${value}`;
      return (
        <ListItem
          key={value.id.toString()}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={handleToggle(value)}
              checked={checked.includes(value.id)}
              inputProps={{ "aria-labelledby": value.id.toString() }}
            />
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemText id={labelId} primary={`${value.label}`} />
          </ListItemButton>
        </ListItem>
      );
    });
  };
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
    >
      <GenerateListItems />
    </List>
  );
}
