# SR-10: Scripts and Modules (The Signal Distribution)

> **"Sebuah Hub yang besar tidak bisa dikelola dengan satu kabel tunggal. SR-10 membedah 'Sistem Distribusi Sinyal' (The Signal Distribution)—jaringan transmisi yang mengatur pengemasan, pengiriman, dan pemuatan kode di seluruh infrastruktur Grid."**

*Pemetaan ECMA-262: Clause 16*

## 📚 Daftar Buku

1.  **[BK-01_ClassicalTransmission](./BK-01_ClassicalTransmission/)**: Membedah transmisi sirkuit terbuka (Scripts) dan risiko tabrakan sinyal global.
2.  **[BK-02_ModularNetwork](./BK-02_ModularNetwork/)**: Jaringan modul modern (ESM) dengan isolasi ketat dan fitur canggih.
3.  **[BK-03_SignalRouting](./BK-03_SignalRouting/)**: Mekanisme ekspor dan impor sinyal (Static & Dynamic Bindings).
4.  **[BK-04_TransmissionProtocols](./BK-04_TransmissionProtocols/)**: Protokol bertahap proses pemuatan modul (Parse, Link, Evaluate).

## 📊 Visualisasi Arsitektur
- [Script vs Module Flow](./BK-01_ClassicalTransmission/assets/script_vs_module_flow.svg) - Perbandingan sirkuit terbuka vs jaringan terisolasi.
- [Module Loading Phases](./assets/module_loading_phases.svg) - Siklus hidup persiapan dan eksekusi modul.
- [Dynamic Import Socket](./assets/dynamic_import_socket.svg) - Pemuatan unit on-demand saat runtime.
- [Cyclic Dependency Graph](./assets/cyclic_dependency_graph.svg) - Penanganan sinyal yang saling melingkar.

---
*Status: Progressing 🔵*
