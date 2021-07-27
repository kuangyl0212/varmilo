import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Switch, Table } from "antd";
import React from "react";
import Highlighter from "react-highlight-words";

const data = [
  {
    key: "1",
    SKU: "1ssd1",
    username: "John Brown",
    phone_number: 800000,
    email: "some@email.com",
    request_time: "2021-07-27 16:00",
  },
  {
    key: "2",
    SKU: "1ssdwe",
    username: "Joe Black",
    phone_number: 11111,
    email: "some@email.com",
    request_time: "2021-07-27 17:00",
  },
  {
    key: "3",
    SKU: "1sssdhf",
    username: "Jim Green",
    phone_number: 32020390,
    email: "some@email.com",
    request_time: "2021-07-27 18:00",
  },
  {
    key: "4",
    SKU: "1ss",
    username: "Jim Red",
    phone_number: 3223480,
    request_time: "2021-07-27 19:00",
    email: "some@email.com",
  },
];

export default class SearchableTable extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };
  onSelectChange: any;

  render() {
    const columns = [
      {
        title: "SKU",
        dataIndex: "SKU",
        key: "SKU",
        // width: "20%",
        sorter: (a, b) => a.SKU - b.SKU,
        ...this.getColumnSearchProps("SKU"),
      },
      {
        title: "用户名",
        dataIndex: "username",
        key: "username",
        // width: "20%",
        sorter: (a, b) => a.username - b.username,
        ...this.getColumnSearchProps("username"),
      },

      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
        // width: "20%",
        ...this.getColumnSearchProps("email"),
      },
      {
        title: "手机号",
        dataIndex: "phone_number",
        key: "phone_number",
        // width: "20%",
        ...this.getColumnSearchProps("phone_number"),
      },
      {
        title: "提交时间",
        dataIndex: "request_time",
        key: "request_time",
        ...this.getColumnSearchProps("request_time"),
        sorter: (a, b) => a.request_time - b.request_time,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "有效性",
        dataIndex: "bonus_time",
        render: () => {
          return <Switch defaultChecked={true} />;
        },
      },
    ];
    const rowSelection = {
      selectedRowKeys: [],
      onChange: this.onSelectChange,
    };
    return (
      <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
    );
  }
}
