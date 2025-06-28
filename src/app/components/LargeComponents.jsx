// app/components/LargeComponent.jsx
export default function LargeComponent() {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2>Componente Cargado con Lazy Loading</h2>
      <p>Este componente se carga solo cuando es necesario</p>
    </div>
  );
}