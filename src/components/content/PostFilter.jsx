import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <div>
        <MyInput
          value={filter.search}
          onChange={e => setFilter({...filter, search: e.target.value.toLowerCase()})}
          placeholder="Поиск..."
        />

        <MySelect
          value={filter.sort}
          onChange={e => setFilter({...filter, sort: e})}
          defaultValue="Сортировка по"
          options={[
            {value: "title", name: "По заголовку"},
            {value: "body", name: "По описанию"}
          ]}
        />
      </div>

    </div>
  );
};

export default PostFilter;