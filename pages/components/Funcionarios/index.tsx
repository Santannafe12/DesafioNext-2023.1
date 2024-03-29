import React, { useEffect, useState } from 'react';
import styles from './funcionarios.module.scss';

interface Funcionarios {
  aniversario: string;
  cargo: string;
  email: string;
  id: number;
  name: string;
  salario: number;
}

export default function Table() {
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([])
  
  useEffect(() => {
    fetch('http://localhost:3000/funcionarios')
      .then((response) => response.json())
      .then((data) => setFuncionarios(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Aniversário</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario)=>(
            <tr key={funcionario.id}>
            <td>{funcionario.id}</td>
            <td>{funcionario.name}</td>
            <td>{funcionario.email}</td>
            <td>{funcionario.aniversario}</td>
            <td>{funcionario.cargo}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
