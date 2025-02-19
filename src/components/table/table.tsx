import React, { useState } from 'react'
import { Modal, Card } from 'antd';
import { elements } from '../../lib/data';
import './table.css';

export const Table = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    const getElementClass = (category: any) => {
      const categoryMap:any = {
        'alkali metal': 'alkali-metal',
        'alkaline earth metal': 'alkaline-earth',
        'transition metal': 'transition-metal',
        'post-transition metal': 'post-transition',
        'metalloid': 'metalloid',
        'nonmetal': 'nonmetal',
        'noble gas': 'noble-gas',
        'lanthanide': 'lanthanide',
        'actinide': 'actinide'
      };
      return `element-card ${categoryMap[category.toLowerCase()] || ''}`;
    };
  
    const handleElementClick = (element : any) => {
      setSelectedElement(element);
    };
  
    return (
      <div className="periodic-table">
        <h1>Periodic Table of Elements</h1>
        <ul className="elements-grid">
          {elements.map((element) => (
            <li
              key={element.atomicNumber}
              className={getElementClass(element.category)}
              onClick={() => handleElementClick(element)}
            >
              <span className="atomic-number">{element.atomicNumber}</span>
              <h2 className="element-symbol">{element.symbol}</h2>
              <p className="element-name">{element.name}</p>
              <p className="element-details">{element.atomicMass.toFixed(2)}</p>
            </li>
          ))}
        </ul>
  
        <Modal
          title={selectedElement?.name}
          open={!!selectedElement}
          onCancel={() => setSelectedElement(null)}
          footer={null}
        >
          {selectedElement && (
            <Card>
              <p><strong>Symbol:</strong> {selectedElement.symbol}</p>
              <p><strong>Atomic Number:</strong> {selectedElement.atomicNumber}</p>
              <p><strong>Atomic Mass:</strong> {selectedElement.atomicMass}</p>
              <p><strong>Category:</strong> {selectedElement.category}</p>
              <p><strong>Group:</strong> {selectedElement.group}</p>
              <p><strong>Period:</strong> {selectedElement.period}</p>
            </Card>
          )}
        </Modal>
      </div>
    );
}
