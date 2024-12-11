import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import CategoryService from '@services/category.service';

const CategorySelector = ({setCategory }) => {
    const [value, setValue] = useState();
    const [categories, setCategories] = useState({});
    const [treeData, setTreeData] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        setTreeData([transformToTreeData(categories)]);
    }, [categories]);

    const fetchCategories = async () => {
        const [data, error] = await CategoryService.getAll();
        if (error) {
            console.log(error);
            return;
        }
        setCategories(...data)
    }

    const transformToTreeData = (categories) => {
        const transform = (node) => ({
            value: node.id,
            title: node.name,
            children: node.children?.map(transform),
        });
        return transform(categories);
    };

    const handleChange = (newValue = null) => {
        setCategory(newValue);
        setValue(newValue)
    };

    return (
        <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Chọn danh mục"
            allowClear
            treeDefaultExpandAll
            treeData={treeData}
            onChange={handleChange}
        />
    );
}

export default CategorySelector;