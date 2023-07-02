import React from "react";
import styles from "./list.module.scss";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const features = [
  { title: "Shape-shifting Capability", id: 1 },
  { title: "Molecular Integration", id: 2 },
  { title: "Structural Memory", id: 3 },
  { title: "Advanced Material Compatibility", id: 4 },
  { title: "Real-Time Control", id: 5 },
  { title: "Adaptive Self-Repair", id: 6 },
  { title: "Safe and Controlled Activation", id: 7 },
  { title: "Energy Efficiency", id: 8 },
  { title: "Compatibility with Existing Systems", id: 9 },
  { title: "Enhanced Security Applications", id: 10 },
  { title: "Seamless Integration with IoT Devices", id: 11 },
  { title: "Customizable Morphing Speed", id: 12 },
];

export default function ShoppingList() {
  const listItems = features.map((feature) => (
    <li key={feature.id} className={styles.listItem}>
      {feature.title}
    </li>
  ));

  return (
    <section className={styles.listContainer}>
      <ul className={styles.shoppingList}>{listItems}</ul>
    </section>
  );
}
