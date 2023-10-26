import React, { Component } from 'react';
import '../styles/ItemSelector.css'

class ItemSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['Selecione uma opção'],
            selectedItem: '',
            newItem: '',
            message: 'Selecione uma opção',
        };
    }

    addItem = () => {
        const { newItem, items } = this.state;

        if (newItem.trim() === '') {
            this.showMessage('Digite um item válido');
        } else if (items.includes(newItem)) {
            this.showMessage('Este item já existe na lista');
        } else {
            items.push(newItem);
            this.setState({ items, newItem: '' });
            this.showMessage(`Item "${newItem}" adicionado com sucesso`);
        }
    };

    removeItem = () => {
        const { newItem, items } = this.state;

        if (items.includes(newItem)) {
            const newItems = items.filter((item) => item !== newItem);
            this.setState({ items: newItems, newItem: '' });
            this.showMessage(`Item "${newItem}" removido com sucesso`);
        } else {
            this.showMessage('Este item não existe na lista');
        }
    };

    clearInput = () => {
        this.setState({ newItem: '' });
    };

    showMessage = (text) => {
        this.setState({ message: text });
    };

    handleSelectChange = (event) => {
        this.setState({ selectedItem: event.target.value });
    };

    handleInputChange = (event) => {
        this.setState({ newItem: event.target.value });
    };

    render() {
        const { items, newItem, message, selectedItem } = this.state;

        return (
            <div>
                <div class="seletor">
                    <select value={selectedItem} onChange={this.handleSelectChange}>
                        <option disabled value="Nenhum">
                            {selectedItem}
                        </option>
                        {items.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div class="input">
                    <input
                        type="text"
                        value={newItem}
                        onChange={this.handleInputChange}
                        placeholder="Digite um novo item"
                    />
                </div>
                <div class="buttons">
                    <button onClick={this.addItem}>Adicionar</button>
                    <button onClick={this.removeItem}>Remover</button>
                    <button onClick={this.clearInput}>Limpar</button>
                </div>
                <div class="messages">
                    <p>{message}</p>
                    <p>{selectedItem}</p>
                </div>
            </div>
        );
    }
}

export default ItemSelector;
