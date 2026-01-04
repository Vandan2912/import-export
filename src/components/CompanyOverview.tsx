// src/components/CompanyOverview.tsx
import styles from "@/styles/CompanyOverview.module.css";

export default function CompanyOverview() {
  return (
    <section className={styles.wrapper}>
      {/* ABOUT */}
      <div className={styles.sectionTitle}>
        <h2>OM EXIM CORPORATION</h2>
        <span />
      </div>

      <div className={styles.about}>
        <div className={styles.iconCircle}>
          <span className={styles.icon}>🏢</span>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <p>
            OM EXIM Corporation is the name, which is reckoned by the clients with conviction in Exporting a wide range
            of Spices, Oil Seeds, Herbs and other Agro Products etc. that are commonly required in your daily life.
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className={styles.sectionTitle}>
        <h2>OUR PRODUCTS</h2>
        <span />
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.title} className={styles.productCard}>
            <div className={styles.iconCircle}>
              <span className={styles.icon}>📦</span>
            </div>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const products = [
  {
    title: "CUMIN SEEDS",
    description:
      "Cumin is a flowering plant in the family Apiaceae. Botanical Name: Cuminum cyminum. Packing: 500gm, 1kg, 5kg, 10kg, 25kg, 50kg. Availability: Feb-March. Quality: 99% purity.",
  },
  {
    title: "CORIANDER SEEDS",
    description:
      "Coriander seeds have a distinctive aroma and taste. Botanical Name: Coriandrum Sativum. Packing: 500gm–50kg. Availability: Feb–March. Eagle quality.",
  },
  {
    title: "GROUNDNUTS",
    description:
      "Groundnut (peanut) is a legume crop grown for edible seeds. Botanical Name: Arachis Hypogaea. Origin: Gujarat. Moisture max 8%.",
  },
  {
    title: "SESAME SEEDS",
    description:
      "Sesame is a flowering plant in the genus Sesamum. Packing: 500gm–50kg. Availability: Feb–March. Natural white & black seeds.",
  },
];
