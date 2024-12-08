# POINT OF SALE

Aplikasi Point of Sale (POS) adalah sistem terintegrasi yang dirancang untuk membantu bisnis mengelola transaksi penjualan secara efisien dan akurat. Aplikasi ini mencakup berbagai fitur  yang mendukung operasional bisnis ritel, restoran, atau toko.

## GIT FLOW

Berikut merupakan flow git yang digunakan di project ini

```plaintext
branches:
    master
    staging
    development
```

- **master**: Branch untuk production
- **staging**: Branch untuk staging
- **development**: Branch untuk development (tempat developer bekerja)

### Branch Flow Proses

- Buat branch baru, dengan menarik dari `master`
- Format nama branch: `prefix` / `card or task_id` / `simple description`
- Contoh penamaan branch: `feat` / `log-01` / `login-page`
- Setelah selesai, lakukan merge ke `development` untuk melakukan testing
- Jika tesing berhasil, lakukan merge ke `staging` untuk tahap sebelum production
- Jika pada `staging` tidak ada bug, lakukan merge ke `master` untuk production

### Contoh Commit Message

```bash
git commit -m `feat/log-01/login-page/create-login-ui`
git commit -m `feat/log-01/login-page/consume-login-api`
```

### Contoh Merge Message

```plaintext
title: feat/log-01/login-page/create-login-ui
description: create login ui
```
