import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Layout,
  Menu,
  Select,
  Space,
  Switch,
  Table,
  Tabs,
} from "antd";
import "antd/dist/antd.css";
import React from "react";
import MultiCheck from "./MultiCheck";
import SearchableTable from "./SearchableTable";

const { RangePicker } = DatePicker;

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const columns = [
  {
    title: "SKU",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "主题",
    dataIndex: "theme",
    key: "theme",
  },
  {
    title: "轴体",
    dataIndex: "switch",
    key: "switch",
  },
  {
    title: "配列",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "布局",
    dataIndex: "layout",
    key: "layout",
  },
  {
    title: "语言",
    dataIndex: "language",
    key: "language",
  },
  {
    title: "需求数量",
    dataIndex: "stock",
    key: "stock",
  },
];

const columns2 = [
  {
    title: "SKU",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "初始库存量",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "库存量",
    dataIndex: "stock",
    key: "stock",
  },

  // {
  //   title: "类型",
  //   key: "tags",
  //   dataIndex: "type",
  //   render: (tags) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: "市场零售价",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "头图",
    dataIndex: "",
    key: "",
  },
  {
    title: "中奖展示图",
    dataIndex: "",
    key: "",
  },
  {
    title: "中奖概率",
    dataIndex: "probability",
    key: "probability",
  },
  {
    title: "上架时间",
    dataIndex: "up_time",
    key: "up_time",
  },
  {
    title: "下架时间",
    dataIndex: "off_time",
    key: "off_time",
  },
  {
    title: "更新人",
    dataIndex: "updater",
    key: "updater",
  },
  {
    title: "更新时间",
    dataIndex: "update_time",
    key: "update_time",
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>修改</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "VA108 樱花主题键盘",
    sku: 42,
    updater: "Lake Park",
    price: 2999,
    type: ["活动奖品"],
    stock: 1000,
    update_time: "2021-07-15",
    up_time: "2021-08-01 10:00",
    off_time: "2021-08-14 18:00",
    probability: 0.001,
    layout: "ANSI",
    size: "108",
    theme: "Sakura",
    switch: "TTC Golden Pink",
    language: "American English",
  },
  {
    key: "2",
    name: "VA108 花旦主题键盘",
    sku: 42,
    updater: "Lake Park",
    price: 2999,
    type: ["活动奖品"],
    stock: 1000,
    update_time: "2021-07-15",
    up_time: "2021-08-01 10:00",
    off_time: "2021-08-14 18:00",
    probability: 0.001,
    layout: "ANSI",
    size: "108",
    theme: "Peking Opera",
    switch: "TTC Golden Pink",
    language: "American English",
  },
];

const columns3 = [
  {
    title: "SKU",
    dataIndex: "bonus_num",
    key: "bonus_num",
    onFilter: (value, record) => record.username.indexOf(value) === 0,
    filters: [
      {
        text: "1",
        value: "Joe",
      },
      {
        text: "2",
        value: "Jim",
      },
    ],
  },
  {
    title: "货品名称",
    dataIndex: "bonus",
    key: "bonus",
  },
  {
    title: "用户名",
    key: "username",
    dataIndex: "username",
    onFilter: (value, record) => record.username.indexOf(value) === 0,
    filters: [
      {
        text: "张三",
        value: "Joe",
      },
      {
        text: "李四",
        value: "Jim",
      },
    ],
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email",
    filters: [
      {
        text: "zhangsan@email.com",
        value: "Joe",
      },
      {
        text: "lisi@email.com",
        value: "Jim",
      },
    ],
    onFilter: (value, record) => record.email.indexOf(value) === 0,
  },
  {
    title: "手机号",
    dataIndex: "phone_number",
    key: "phone_number",
    filters: [
      {
        text: "111111",
        value: "Joe",
      },
      {
        text: "0000000",
        value: "Jim",
      },
    ],
    onFilter: (value, record) => record.phone_number.indexOf(value) === 0,
  },
  {
    title: "提交时间",
    dataIndex: "bonus_time",
    key: "bonus_time",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.bonus_time - b.bonus_time,
  },
  {
    title: "有效性",
    dataIndex: "bonus_time",
    render: () => {
      return <Switch checked />;
    },
  },
];

const data2 = [
  {
    key: "2",
    name: "多彩键帽",
    sku: 42,
    updater: "Lake Park",
    price: 2999,
    type: ["活动奖品"],
    stock: 1000,
    update_time: "2021-07-15",
    up_time: "2021-08-01 10:00",
    off_time: "2021-08-14 18:00",
    probability: 0.001,
  },
];
const data3 = [
  {
    bonus_num: 1,
    username: "张三",
    email: "zhangsan@email.com",
    bonus_sku: 1,
    bonus: "猫爪键帽",
    phone_number: "00000000000",
    order: "GN00000000000000000H",
    bonus_time: "2021-08-14 20:00",
  },
  {
    bonus_num: 2,
    username: "李四",
    email: "zhangsan@email.com",
    bonus_sku: 1,
    bonus: "猫爪键帽",
    phone_number: "1",
    order: "GN00000000000000000H",
    bonus_time: "2021-08-14 18:00",
  },
];

export class RestockManager extends React.Component {
  state = {
    collapsed: false,
    isModalVisible: [false, false, false],
    modalTitle: "",
    timeFilter: true,
    themes: ["樱花", "海韵", "熊猫"],
    indeterminate: false,
    themesChecked: ["樱花", "海韵", "熊猫"],
    checkAll: true,
  };

  toggleTimeFilter = () => {
    this.setState({ timeFilter: !this.state.timeFilter });
    console.log(this.state.timeFilter);
  };

  showModal = (index = 0, title: string) => {
    let old_state = this.state.isModalVisible;
    old_state[index] = true;
    this.setState({ isModalVisible: old_state });
    this.setState({ modalTitle: title });
  };

  handleOk = (index) => {
    let old_state = this.state.isModalVisible;
    old_state[index] = false;
    this.setState({ isModalVisible: old_state });
  };

  handleCancel = this.handleOk;

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCheckAllChange = (e) => {
    this.setState({
      themesChecked: e.target.checked ? this.state.themes : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };
  onThemeChange = (checkedValue) => {
    this.setState({
      themesChecked: checkedValue,
      indeterminate:
        !!checkedValue.length && checkedValue.length < this.state.themes.length,
      checkAll: checkedValue.length == this.state.themes.length,
    });
  };
  onSelectChange: any;

  render(): JSX.Element {
    // const [disabled, setDisabled] = React.useState(true);
    // const toggle = () => {
    //   setDisabled(!disabled);
    // };

    const rowSelection = {
      selectedRowKeys: [],
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["9"]}
                defaultOpenKeys={["sub3"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="商品管理"
                >
                  <Menu.Item key="9">补货申请管理</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Tabs>
                  <TabPane tab="需求货品查询" key="1">
                    <Form
                      labelAlign="left"
                      labelCol={{ span: 2 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="起止时间">
                        <Switch
                          checked={this.state.timeFilter}
                          onClick={this.toggleTimeFilter}
                          checkedChildren="开启"
                          unCheckedChildren="关闭"
                        ></Switch>
                        <span> </span>
                        <RangePicker
                          disabled={!this.state.timeFilter}
                        ></RangePicker>
                      </Form.Item>
                      <Divider />
                      <Form.Item label="主题">
                        <Checkbox
                          indeterminate={this.state.indeterminate}
                          onChange={this.onCheckAllChange}
                          checked={this.state.checkAll}
                        >
                          全选
                        </Checkbox>
                        <br />
                        <Checkbox.Group
                          options={this.state.themes}
                          value={this.state.themesChecked}
                          onChange={this.onThemeChange}
                        />
                      </Form.Item>
                      <Form.Item label="轴体">
                        <MultiCheck
                          options={["樱桃红轴", "樱桃茶轴", "静电容V2樱花粉轴"]}
                        ></MultiCheck>
                      </Form.Item>
                      <Form.Item label="布局">
                        <MultiCheck
                          options={["ANSI", "ISO", "JIS"]}
                        ></MultiCheck>
                      </Form.Item>
                      <Form.Item label="配列">
                        <MultiCheck
                          options={["20%", "65%", "80%", "110%"]}
                        ></MultiCheck>
                      </Form.Item>
                      <Form.Item label="语言">
                        <MultiCheck
                          options={["美式英语", "俄语", "韩语", "日语"]}
                        ></MultiCheck>
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary">查询</Button>
                      </Form.Item>
                    </Form>
                    <Table columns={columns} dataSource={data} />
                  </TabPane>

                  <TabPane tab="需求记录查询" key="3">
                    <Form
                      labelAlign="left"
                      labelCol={{ span: 1.5 }}
                      wrapperCol={{ span: 16 }}
                    >
                      <Form.Item label="起止时间">
                        <Switch
                          checked={this.state.timeFilter}
                          onClick={this.toggleTimeFilter}
                          checkedChildren="开启"
                          unCheckedChildren="关闭"
                        ></Switch>
                        <span> </span>
                        <RangePicker
                          disabled={!this.state.timeFilter}
                        ></RangePicker>
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary">查询</Button>
                      </Form.Item>
                      <Divider />
                      <Form.Item label="操作">
                        <Button type="primary">设置为无效记录</Button>
                      </Form.Item>
                    </Form>

                    <SearchableTable />
                  </TabPane>
                </Tabs>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
