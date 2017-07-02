
import React from 'react';
import Client from './Client';

class FoodSearch extends React.Component {

  render() {
    const { showRemoveIcon, foods } = this.props;
    console.log(this.props)
    const removeIconStyle = this.props.showRemoveIcon ? {} : { visibility: 'hidden' };

    const foodRows = foods.map((food, idx) => (
      <tr
        key={idx}
        onClick={() => this.props.onFoodClick(food)}
      >
        <td>{food.description}</td>
        <td className='right aligned'>{food.kcal}</td>
        <td className='right aligned'>{food.protein_g}</td>
        <td className='right aligned'>{food.fat_g}</td>
        <td className='right aligned'>{food.carbohydrate_g}</td>
      </tr>
    ));

    return (
      <div id='food-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search foods...'
                      value={this.props.searchValue}
                      onChange={this.props.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    // onClick={this.handleSearchCancel}
                    onClick={this.props.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Description</th>
              <th>Kcal</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
            {foodRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FoodSearch;
