import React, { useState, useEffect, useMemo, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CSVLink } from 'react-csv';
import './reporttable.css';

// GridReport Component
const ReportTable = () => {
  const [columns, setColumns] = useState([
    { id: 'checkbox', title: '', field: 'checkbox', width: 50, order: -1, visible: true, sortable: false, filterable: false },
    { id: 'id', title: 'ID', field: 'id', width: 60, order: 0, visible: true, sortable: true, filterable: true },
    { id: 'name', title: 'Name', field: 'name', width: 150, order: 1, visible: true, sortable: true, filterable: true },
    { id: 'category', title: 'Category', field: 'category', width: 120, order: 2, visible: true, sortable: true, filterable: true },
    { id: 'quantity', title: 'Quantity', field: 'quantity', width: 100, order: 3, visible: true, sortable: true, filterable: true },
    { id: 'price', title: 'Price', field: 'price', width: 100, order: 4, visible: true, sortable: true, filterable: true },
    { id: 'date', title: 'Date', field: 'date', width: 120, order: 5, visible: true, sortable: true, filterable: true },
    
  ]);

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newRow, setNewRow] = useState({
    id: '',
    name: '',
    category: '',
    quantity: '',
    price: '',
    date: '',
  });
  const [editingRow, setEditingRow] = useState(null);
  const [editRowData, setEditRowData] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [groupBy, setGroupBy] = useState(null);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterConfig, setFilterConfig] = useState({});
  const [activeFilters, setActiveFilters] = useState({});
  const [showFilterPanel, setShowFilterPanel] = useState(null);
  const [filterValues, setFilterValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const sampleData = [
      { id: 1, name: 'Product A', category: 'Electronics', quantity: 50, price: 99.99, date: '2025-03-01' },
      { id: 2, name: 'Product B', category: 'Office', quantity: 25, price: 49.99, date: '2025-03-05' },
      { id: 3, name: 'Product C', category: 'Furniture', quantity: 10, price: 299.99, date: '2025-03-07' },
      { id: 4, name: 'Product D', category: 'Electronics', quantity: 35, price: 149.99, date: '2025-03-02' },
      { id: 5, name: 'Product E', category: 'Office', quantity: 15, price: 79.99, date: '2025-03-05' },
      { id: 6, name: 'Product F', category: 'Furniture', quantity: 5, price: 399.99, date: '2025-03-08' },
      { id: 7, name: 'Product G', category: 'Electronics', quantity: 60, price: 199.99, date: '2025-03-01' },
      { id: 8, name: 'Product H', category: 'Office', quantity: 30, price: 59.99, date: '2025-03-06' },
      { id: 9, name: 'Product I', category: 'Furniture', quantity: 8, price: 349.99, date: '2025-03-09' },
      { id: 10, name: 'Product J', category: 'Electronics', quantity: 45, price: 129.99, date: '2025-03-03' },
      { id: 11, name: 'Product A', category: 'Electronics', quantity: 50, price: 99.99, date: '2025-03-01' },
      { id: 12, name: 'Product B', category: 'Office', quantity: 25, price: 49.99, date: '2025-03-05' },
      { id: 13, name: 'Product C', category: 'Furniture', quantity: 10, price: 299.99, date: '2025-03-07' },
      { id: 14, name: 'Product D', category: 'Electronics', quantity: 35, price: 149.99, date: '2025-03-02' },
      { id: 15, name: 'Product E', category: 'Office', quantity: 15, price: 79.99, date: '2025-03-05' },
      { id: 16, name: 'Product F', category: 'Furniture', quantity: 5, price: 399.99, date: '2025-03-08' },
      { id: 17, name: 'Product G', category: 'Electronics', quantity: 60, price: 199.99, date: '2025-03-01' },
      { id: 18, name: 'Product H', category: 'Office', quantity: 30, price: 59.99, date: '2025-03-06' },
      { id: 19, name: 'Product I', category: 'Furniture', quantity: 8, price: 349.99, date: '2025-03-09' },
      { id: 20, name: 'Product J', category: 'Electronics', quantity: 45, price: 129.99, date: '2025-03-03' },
      { id: 21, name: 'Product A', category: 'Electronics', quantity: 50, price: 99.99, date: '2025-03-01' },
      { id: 22, name: 'Product B', category: 'Office', quantity: 25, price: 49.99, date: '2025-03-05' },
      { id: 23, name: 'Product C', category: 'Furniture', quantity: 10, price: 299.99, date: '2025-03-07' },
      { id: 24, name: 'Product D', category: 'Electronics', quantity: 35, price: 149.99, date: '2025-03-02' },
      { id: 25, name: 'Product E', category: 'Office', quantity: 15, price: 79.99, date: '2025-03-05' },
      { id: 26, name: 'Product F', category: 'Furniture', quantity: 5, price: 399.99, date: '2025-03-08' },
      { id: 27, name: 'Product G', category: 'Electronics', quantity: 60, price: 199.99, date: '2025-03-01' },
      { id: 28, name: 'Product H', category: 'Office', quantity: 30, price: 59.99, date: '2025-03-06' },
      { id: 29, name: 'Product I', category: 'Furniture', quantity: 8, price: 349.99, date: '2025-03-09' },
      { id: 30, name: 'Product J', category: 'Electronics', quantity: 45, price: 129.99, date: '2025-03-03' },
    ];
    
    setData(sampleData);
    
    const filterValueObj = {};
    columns.forEach(column => {
      if (column.filterable) {
        const uniqueValues = [...new Set(sampleData.map(item => item[column.field]))];
        filterValueObj[column.field] = uniqueValues;
      }
    });
    setFilterValues(filterValueObj);
  }, []);

  const sortedColumns = [...columns]
    .filter(col => col.visible)
    .sort((a, b) => a.order - b.order);

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];
    
    Object.keys(activeFilters).forEach(filterKey => {
      if (activeFilters[filterKey] && activeFilters[filterKey].length > 0) {
        result = result.filter(item => activeFilters[filterKey].includes(String(item[filterKey])));
      }
    });
    
    if (searchTerm.trim()) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      result = result.filter(item =>
        sortedColumns.some(column =>
          String(item[column.field]).toLowerCase().includes(lowerCaseSearch)
        )
      );
    }
    
    if (sortConfig.key) {
      result.sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];
        
        let comparison = 0;
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          comparison = valueA - valueB;
        } else {
          comparison = String(valueA).localeCompare(String(valueB));
        }
        
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      });
    }
    
    return result;
  }, [data, searchTerm, sortedColumns, sortConfig, activeFilters]);

  const pageCount = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAndSortedData.slice(startIndex, endIndex);
  }, [filteredAndSortedData, currentPage]);

  const goToNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilters, sortConfig]);

  const handleAddRow = () => {
    if (!newRow.name || !newRow.category || !newRow.quantity || !newRow.price || !newRow.date) {
      alert('Please fill all fields before adding a new row.');
      return;
    }
    const id = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newItem = { ...newRow, id };
    
    const updatedData = [...data, newItem];
    setData(updatedData);
    
    const updatedFilterValues = { ...filterValues };
    columns.forEach(column => {
      if (column.filterable && newItem[column.field]) {
        if (!updatedFilterValues[column.field]) {
          updatedFilterValues[column.field] = [];
        }
        if (!updatedFilterValues[column.field].includes(newItem[column.field])) {
          updatedFilterValues[column.field] = [...updatedFilterValues[column.field], newItem[column.field]];
        }
      }
    });
    setFilterValues(updatedFilterValues);
    
    setNewRow({
      id: '',
      name: '',
      category: '',
      quantity: '',
      price: '',
      date: '',
    });
  };

  const handleDeleteRow = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEditRow = (item) => {
    setEditingRow(item.id);
    setEditRowData({ ...item });
  };

  const handleCancelEdit = () => {
    setEditingRow(null);
    setEditRowData({});
  };

  const handleSaveInlineEdit = () => {
    setData(data.map(item => item.id === editingRow ? editRowData : item));
    setEditingRow(null);
    setEditRowData({});
  };

  const handleInlineEditChange = (field, value) => {
    setEditRowData({
      ...editRowData,
      [field]: value
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const moveColumn = (dragIndex, hoverIndex) => {
    const dragColumn = sortedColumns[dragIndex];
    const hoverColumn = sortedColumns[hoverIndex];
    const updatedColumns = columns.map(col => {
      if (col.id === dragColumn.id) return { ...col, order: hoverColumn.order };
      if (col.order > dragColumn.order && col.order <= hoverColumn.order) return { ...col, order: col.order - 1 };
      if (col.order < dragColumn.order && col.order >= hoverColumn.order) return { ...col, order: col.order + 1 };
      return col;
    });
    setColumns(updatedColumns);
  };

  const handleResizeColumn = (id, newWidth) => {
    setColumns(columns.map(col => 
      col.id === id ? { ...col, width: Math.max(60, newWidth) } : col
    ));
  };
  
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      key = null;
    }
    setSortConfig({ key, direction });
  };
  
  const toggleFilterPanel = (columnId) => {
    setShowFilterPanel(showFilterPanel === columnId ? null : columnId);
  };
  
  const applyFilter = (field, selectedValues) => {
    if (selectedValues.length === 0 || selectedValues.length === filterValues[field].length) {
      const newActiveFilters = { ...activeFilters };
      delete newActiveFilters[field];
      setActiveFilters(newActiveFilters);
    } else {
      setActiveFilters({
        ...activeFilters,
        [field]: selectedValues
      });
    }
    setShowFilterPanel(null);
  };
  
  const clearAllFilters = () => {
    setActiveFilters({});
    setShowFilterPanel(null);
  };
  
  const getSortIcon = (columnId) => {
    if (sortConfig.key !== columnId) return '↕️';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };
  
  const hasActiveFilter = (columnId) => {
    return activeFilters[columnId] && activeFilters[columnId].length > 0;
  };

  const exportData = filteredAndSortedData.map(item => {
    const exportItem = {};
    sortedColumns.forEach(col => {
      exportItem[col.title] = item[col.field];
    });
    return exportItem;
  });

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredAndSortedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredAndSortedData.map(item => item.id));
    }
  };

  const handleBulkDelete = () => {
    setData(data.filter(item => !selectedRows.includes(item.id)));
    setSelectedRows([]);
    setShowDeletePopup(false);
  };

  const handleGroupBy = (field) => {
    setGroupBy(field);
  };

  const groupedData = useMemo(() => {
    if (!groupBy) return null;

    const grouped = filteredAndSortedData.reduce((acc, item) => {
      const key = item[groupBy];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    return Object.entries(grouped).map(([key, items]) => ({
      key,
      items,
      totalQuantity: items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: items.reduce((sum, item) => sum + item.price, 0),
    }));
  }, [filteredAndSortedData, groupBy]);

  const grandTotalQuantity = useMemo(() => {
    return filteredAndSortedData.reduce((sum, item) => sum + item.quantity, 0);
  }, [filteredAndSortedData]);

  const grandTotalPrice = useMemo(() => {
    return filteredAndSortedData.reduce((sum, item) => sum + item.price, 0);
  }, [filteredAndSortedData]);

  const renderCell = (item, column) => {
    if (column.field === 'checkbox') {
      return (
        <input
          type="checkbox"
          checked={selectedRows.includes(item.id)}
          onChange={() => handleCheckboxChange(item.id)}
        />
      );
    }
    
    if (editingRow === item.id) {
      if (column.field === 'id') {
        return editRowData[column.field]; // ID is not editable
      }
      
      const inputType = column.field === 'quantity' || column.field === 'price' 
        ? 'number' 
        : column.field === 'date' 
          ? 'date' 
          : 'text';
      
      return (
        <input
          type={inputType}
          value={editRowData[column.field]}
          onChange={(e) => handleInlineEditChange(column.field, 
            inputType === 'number' ? parseFloat(e.target.value) : e.target.value)}
          className="inline-edit-input"
          autoFocus={column.field === 'name'}
          step={inputType === 'number' && column.field === 'price' ? '0.01' : '1'}
        />
      );
    }
    
    return item[column.field];
  };

  return (
    <div className="grid-container">
      <div className="toolbar">
        <div className="toolbar-left">
          {Object.keys(activeFilters).length > 0 && (
            <button className="clear-filters-btn" onClick={clearAllFilters}>
              Clear All Filters
            </button>
          )}
        </div>
        <div className="toolbar-right">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={handleClearSearch} aria-label="Clear search">
                ×
              </button>
            )}
          </div>
          <CSVLink 
            data={exportData} 
            filename={"erp-report.csv"}
            className="export-btn"
            aria-label="Export to Excel"
          >
            Export to Excel
          </CSVLink>
          {selectedRows.length > 0 && (
            <button className="bulk-delete-btn" onClick={() => setShowDeletePopup(true)}>
              Delete Selected ({selectedRows.length})
            </button>
          )}
        </div>
      </div>

      <div className="search-results-info">
        {searchTerm && (
          <p>
            Found {filteredAndSortedData.length} {filteredAndSortedData.length === 1 ? 'result' : 'results'} 
            for "{searchTerm}"
          </p>
        )}
        {Object.keys(activeFilters).length > 0 && (
          <div className="active-filters">
            <span>Active filters: </span>
            {Object.keys(activeFilters).map(key => {
              const column = columns.find(col => col.field === key);
              return (
                <span key={key} className="filter-badge">
                  {column?.title}: {activeFilters[key].join(', ')}
                  <button 
                    className="remove-filter" 
                    onClick={() => {
                      const newFilters = { ...activeFilters };
                      delete newFilters[key];
                      setActiveFilters(newFilters);
                    }}
                  >×</button>
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div className="group-by-controls">
        <label>Group By:</label>
        <select onChange={(e) => handleGroupBy(e.target.value)}>
          <option value="">None</option>
          {columns.filter(col => col.filterable).map(col => (
            <option key={col.id} value={col.field}>{col.title}</option>
          ))}
        </select>
      </div>

      <div className={`table-container ${showFilterPanel ? 'blurred' : ''}`}>
        <table className="data-table">
          <thead>
            <tr>
              {sortedColumns.map((column, index) => (
                <DraggableHeader 
                  key={column.id} 
                  column={column} 
                  index={index}
                  moveColumn={moveColumn}
                  onResize={handleResizeColumn}
                  sortable={column.sortable}
                  filterable={column.filterable}
                  sortDirection={sortConfig.key === column.field ? sortConfig.direction : null}
                  onSort={() => column.sortable && handleSort(column.field)}
                  onFilter={() => column.filterable && toggleFilterPanel(column.id)}
                  hasActiveFilter={hasActiveFilter(column.field)}
                  sortIcon={getSortIcon(column.field)}
                  onSelectAll={column.field === 'checkbox' ? handleSelectAll : null}
                  isAllSelected={column.field === 'checkbox' && selectedRows.length === filteredAndSortedData.length}
                />
              ))}
              <th className="action-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groupBy ? (
              groupedData.map(group => (
                <React.Fragment key={group.key}>
                  <tr className="group-header">
                    <td colSpan={sortedColumns.length + 1}>
                      <strong>{group.key}</strong>
                    </td>
                  </tr>
                  {group.items.map(item => (
                    <tr key={item.id} className={editingRow === item.id ? 'editing-row' : ''}>
                      {sortedColumns.map(column => (
                        <td key={column.id} style={{ width: column.width }}>
                          {renderCell(item, column)}
                        </td>
                      ))}
                      <td className="action-cell">
                        {editingRow === item.id ? (
                          <>
                            <button className="save-btn" onClick={handleSaveInlineEdit}>Save</button>
                            <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <button className="edit-btn" onClick={() => handleEditRow(item)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDeleteRow(item.id)}>Delete</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="group-total">
                    <td colSpan={sortedColumns.findIndex(col => col.field === 'quantity')}>Total</td>
                    <td>{group.totalQuantity}</td>
                    <td>{group.totalPrice.toFixed(2)}</td>
                    <td colSpan={sortedColumns.length - sortedColumns.findIndex(col => col.field === 'price') - 1 + 1}></td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              paginatedData.map(item => (
                <tr key={item.id} className={editingRow === item.id ? 'editing-row' : ''}>
                  {sortedColumns.map(column => (
                    <td key={column.id} style={{ width: column.width }}>
                      {renderCell(item, column)}
                    </td>
                  ))}
                  <td className="action-cell">
                    {editingRow === item.id ? (
                      <>
                        <button className="save-btn" onClick={handleSaveInlineEdit}>Save</button>
                        <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="edit-btn" onClick={() => handleEditRow(item)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDeleteRow(item.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
            {groupBy && (
              <tr className="grand-total">
                <td colSpan={sortedColumns.findIndex(col => col.field === 'quantity')}>Grand Total</td>
                <td>{grandTotalQuantity}</td>
                <td>{grandTotalPrice.toFixed(2)}</td>
                <td colSpan={sortedColumns.length - sortedColumns.findIndex(col => col.field === 'price') - 1 + 1}></td>
              </tr>
            )}
            <tr className="new-row">
              {sortedColumns.map(column => (
                <td key={column.id} style={{ width: column.width }}>
                  {column.field === 'checkbox' ? (
                    null
                  ) : column.field === 'id' ? (
                    <input
                      type="text"
                      placeholder={column.title}
                      disabled
                      value="Auto"
                    />
                  ) : (
                    <input
                      type={column.field === 'quantity' || column.field === 'price' ? 'number' : column.field === 'date' ? 'date' : 'text'}
                      placeholder={column.title}
                      value={newRow[column.field] || ''}
                      onChange={(e) => setNewRow({ ...newRow, [column.field]: e.target.value })}
                      step={column.field === 'price' ? '0.01' : '1'}
                    />
                  )}
                </td>
              ))}
              <td className="action-cell">
                <button className="add-btn" onClick={handleAddRow}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="pagination-controls">
          <div className="pagination-info">
            Showing {filteredAndSortedData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} items
          </div>
          <div className="pagination-buttons">
            <button 
              className="pagination-btn" 
              onClick={goToPreviousPage} 
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="page-indicator">
              Page {currentPage} of {pageCount || 1}
            </span>
            <button 
              className="pagination-btn" 
              onClick={goToNextPage} 
              disabled={currentPage === pageCount || pageCount === 0}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {showFilterPanel && (
        <div className="filter-overlay">
          <FilterPanel 
            column={columns.find(col => col.id === showFilterPanel)}
            values={filterValues[columns.find(col => col.id === showFilterPanel).field] || []}
            activeValues={activeFilters[columns.find(col => col.id === showFilterPanel).field] || []}
            onApply={(selectedValues) => applyFilter(
              columns.find(col => col.id === showFilterPanel).field, 
              selectedValues
            )}
            onClose={() => setShowFilterPanel(null)}
          />
        </div>
      )}

      {showDeletePopup && (
        <div className="delete-confirmation-popup">
          <div className="delete-confirmation-content">
            <p>Are you sure you want to delete {selectedRows.length} selected items?</p>
            <div className="delete-confirmation-buttons">
              <button className="confirm-delete-btn" onClick={handleBulkDelete}>Delete</button>
              <button className="cancel-delete-btn" onClick={() => setShowDeletePopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Draggable Header Component
const DraggableHeader = ({ 
  column, 
  index, 
  moveColumn, 
  onResize, 
  sortable,
  filterable,
  sortDirection,
  onSort,
  onFilter,
  hasActiveFilter,
  sortIcon,
  onSelectAll,
  isAllSelected
}) => {
  const ref = React.useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: 'COLUMN',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover: (item) => {
      if (item.index === index) return;
      moveColumn(item.index, index);
      item.index = index;
    },
  });
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setStartX(e.clientX);
    setStartWidth(column.width);
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    if (e.target.classList.contains('resize-handle')) {
      e.target.classList.add('active');
    }
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = Math.max(60, startWidth + (e.clientX - startX));
      onResize(column.id, newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    document.querySelectorAll('.resize-handle').forEach(handle => {
      handle.classList.remove('active');
    });
  };

  drag(drop(ref));
  const getSortDirectionClass = () => {
    if (!sortDirection) return '';
    return sortDirection === 'asc' ? 'asc' : 'desc';
  };
  
  return (
    <th 
      ref={ref} 
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        width: column.width,
        position: 'relative',
      }}
      className={`draggable-header ${hasActiveFilter ? 'has-filter' : ''} ${isDragging ? 'dragging-column' : ''}`}
    >
      <div className="header-content">
        {column.field === 'checkbox' ? (
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={onSelectAll}
          />
        ) : (
          <>
            <div 
              className="drag-handle" 
              aria-label="Drag handle"
              ref={drag}
            >
              ⋮⋮
            </div>
            <span className="column-title">{column.title}</span>
          </>
        )}
        <div className="header-controls">
          {sortable && (
            <button 
              className={`sort-button ${sortDirection ? `active ${getSortDirectionClass()}` : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onSort();
              }}
              aria-label={`Sort by ${column.title}`}
            >
              {/* New sort icon will be added through CSS */}
            </button>
          )}
          {filterable && (
            <button 
              className={`filter-button ${hasActiveFilter ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onFilter();
              }}
              aria-label={`Filter by ${column.title}`}
            >
              {/* New filter icon will be added through CSS */}
            </button>
          )}
        </div>
      </div>
      <div
        className="resize-handle"
        onMouseDown={handleMouseDown}
        aria-label="Resize handle"
      />
    </th>
  );
};

// Filter Panel Component
const FilterPanel = ({ column, values, activeValues, onApply, onClose }) => {
  const [selectedValues, setSelectedValues] = useState(activeValues || []);
  const [searchValue, setSearchValue] = useState("");
  const panelRef = useRef(null);
  
  const filteredValues = values.filter(value => 
    String(value).toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const handleToggleValue = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(v => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  
  const handleSelectAll = () => {
    if (selectedValues.length === values.length) {
      setSelectedValues([]);
    } else {
      setSelectedValues([...values.map(v => String(v))]);
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="filter-panel-dialog" ref={panelRef}>
      <div className="filter-panel-header">
        <h3>Filter by {column.title}</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="filter-panel-content">
        <div className="filter-search">
          <input
            type="text"
            placeholder="Search values..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
          />
        </div>
        <div className="select-all-option">
          <label>
            <input
              type="checkbox"
              checked={selectedValues.length === values.length}
              onChange={handleSelectAll}
            />
            Select All
          </label>
        </div>
        <div className="filter-values-list">
          {filteredValues.map((value) => (
            <div className="filter-value-item" key={value}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(String(value))}
                  onChange={() => handleToggleValue(String(value))}
                />
                {value}
              </label>
            </div>
          ))}
          {filteredValues.length === 0 && (
            <div className="no-results">No matching values found</div>
          )}
        </div>
      </div>
      <div className="filter-panel-footer">
        <button 
          className="cancel-filter-btn" 
          onClick={onClose}
        >
          Cancel
        </button>
        <button 
          className="apply-filter-btn" 
          onClick={() => onApply(selectedValues)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ReportTable;