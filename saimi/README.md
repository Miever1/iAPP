# 后端接口文档

## 用户

### 登陆

POST /login

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| username |  String   |  test   |
| password |  String   |  test   |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '登录成功'  |

### 注册

POST /signup

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| username |  String   |  test   |
| password |  String   |  test   |
|  gender  |  String   | 'M' / 'F'(M:男，F:女) |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '注册成功'  |


### 注销

GET /logout

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(用户 id)       |  String   |  1   |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success' |
|  message |  '注销成功'  |

### 编辑用户

POST /reset

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id |  String   |  1   |
| origin_password(原始密码) |  String   |  test   |
| new_password(新密码)  |  String   | test |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '修改成功'  |

## Journal

### 创建 Journal

POST /createJournal

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| title |  String   |  test   |
| content |  String   |  test   |
| user_id  |  String   | 1 |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '发布成功'  |

### 修改 Journal

POST /editJournal

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Journal id)    | String | 1 |
| title |  String   |  test   |
| content |  String   |  test   |
| user_id  |  String   | 1 |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '修改成功'  |

### 删除 Journal

GET /deleteJournal

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Journal id) |  String   |  1   |
| user_id  |  String   | 1 |

/deleteJournal?id=1&user_id=1

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '删除成功'  |

## 纪念日

### 创建纪念日

POST /createCalendar

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| memoryname |  String   |  test   |
| memorycontent |  String   |  test   |
| memorydate  |  timestamp   | 1545730073 |
| user_id | String | 1 |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '创建成功'  |

### 修改纪念日

POST /editCalendar

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Calendar id)    | String | 1 |
| memoryname |  String   |  test   |
| memorycontent |  String   |  test   |
| memorydate | timestamp | 1545730073 |
| user_id  |  String   | 1 |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '修改成功'  |

### 删除纪念日

GET /deleteJournal

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Calendar id) |  String   |  1   |
| user_id  |  String   | 1 |

/deleteCalendar?id=1&user_id=1

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '删除成功'  |

## LoveTree

### 创建 LoveTree

POST /createTree

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| treename |  String   |  test   |
| user_id  |  String   | 1 |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '创建成功'  |

### 修改 LoveTree

POST /editTree

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Tree id)    | String | 1 |
| treename |  String   |  test   |
| user_id  |  String   | 1 |

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '修改成功'  |

### 删除 Journal

GET /deleteTree

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Tree id) |  String   |  1   |
| user_id  |  String   | 1 |

/deleteTree?id=1&user_id=1

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '删除成功'  |

### 浇水

GET /addWater

|   参数名  |   类型     |  示例值  |
| -------- |:---------:|:---------:|
| id(Tree id) |  String   |  1   |
| user_id  |  String   | 1 |

/addWater?id=1&user_id=1

返回结果

|   参数名  |  示例值  |
| -------- |:---------:|
|  status  |  'success/fail' |
|  message |  '浇水成功'  |