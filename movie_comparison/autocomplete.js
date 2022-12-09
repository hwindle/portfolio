const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {

  root.innerHTML = `
    <label><span>Search</span></label>
    <input class="input">
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = root.querySelector('.input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

  const onInput = async event => {
    const items = await fetchData(event.target.value);
    if (!items.length) {
      dropdown.classList.remove('is-active');
      // nothing in the data list, return
      return;
    }
    resultsWrapper.innerHTML = '';
    dropdown.classList.add('is-active');
    for (let item of items) {
      const option = document.createElement('a');
      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active');
        input.value = inputValue(item);
        onOptionSelect(item);
      });
      // add to list of things
      resultsWrapper.appendChild(option);
    }
  }; // onInput method

  input.addEventListener('input', debounce(onInput, 500));
  // if you click anywhere else in document, hide dropdown
  document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove('is-active');
    }
  });

};