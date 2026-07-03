import Button from "../../components/Button";

export default function ButtonsPage() {
  return (
    <>
      <h2 style={{ marginBottom: 24 }}>🔘 Buttons</h2>

      <section className="ids-lab__panel">
        <h3>Variantes</h3>

        <div className="ids-lab__component-row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section className="ids-lab__panel">
        <h3>Tamanhos</h3>

        <div className="ids-lab__component-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="ids-lab__panel">
        <h3>Estados</h3>

        <div className="ids-lab__component-row">
          <Button>Enabled</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </>
  );
}