<template>
	<div id="printHidden">
		<div
			bgcolor="#f6f6f6"
			style="color: #333; height: 100%; width: 100%"
			height="100%"
			width="100%"
		>
			<table
				bgcolor="#f6f6f6"
				cellspacing="0"
				style="border-collapse: collapse; padding: 40px; width: 100%"
				width="100%"
			>
				<tbody>
					<tr>
						<td width="5px" style="padding: 0"></td>
						<td
							style="
								clear: both;
								display: block;
								margin: 0 auto;
								max-width: 600px;
								padding: 10px 0;
							"
						>
							<table
								width="100%"
								cellspacing="0"
								style="border-collapse: collapse"
							>
								<tbody>
									<tr>
										<td style="padding: 0">
											<a href="#" style="color: #348eda" target="_blank">
												<img
													src="/img/icons/favicon.svg"
													alt="kantoor.com"
													style="height: 50px; max-width: 100%; width: 157px"
													height="50"
													width="157"
												/>
											</a>
										</td>
										<td
											style="
													color: #999;
													font-size: 12px;
													padding: 0;
													text-align: right;
													align=right"
										>
											{{ dataInvoice.nama }}<br />
											Invoice {{ dataInvoice.id }}<br />
											{{ dataInvoice.tanggalSekarang }}
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td width="5px" style="padding: 0"></td>
					</tr>

					<tr>
						<td width="5px" style="padding: 0"></td>
						<td
							bgcolor="#FFFFFF"
							style="
								border: 1px solid #000;
								clear: both;
								display: block;
								margin: 0 auto;
								max-width: 600px;
								padding: 0;
							"
						>
							<table
								width="100%"
								style="
									background: #f9f9f9;
									border-bottom: 1px solid #eee;
									border-collapse: collapse;
									color: #999;
								"
							>
								<tbody>
									<tr>
										<td width="50%" style="padding: 20px">
											<strong style="color: #333; font-size: 24px"
												>{{ dataInvoice.totalHarga }}</strong
											>
											Paid
										</td>
										<td align="right" width="50%" style="padding: 20px">
											Thanks for using <span class="il">Kantoor</span>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td style="padding: 0"></td>
						<td width="5px" style="padding: 0"></td>
					</tr>
					<tr>
						<td width="5px" style="padding: 0"></td>
						<td
							style="
								border: 1px solid #000;
								border-top: 0;
								clear: both;
								display: block;
								margin: 0 auto;
								max-width: 600px;
								padding: 0;
							"
						>
							<table
								cellspacing="0"
								style="
									border-collapse: collapse;
									border-left: 1px solid #000;
									margin: 0 auto;
									max-width: 600px;
								"
							>
								<tbody>
									<tr>
										<td valign="top" style="padding: 20px">
											<h3
												style="
													border-bottom: 1px solid #000;
													color: #000;
													font-family: 'Helvetica Neue', Helvetica, Arial,
														'Lucida Grande', sans-serif;
													font-size: 18px;
													font-weight: bold;
													line-height: 1.2;
													margin: 0;
													margin-bottom: 15px;
													padding-bottom: 5px;
												"
											>
												Keterangan
											</h3>
											<table
												cellspacing="0"
												style="border-collapse: collapse; margin-bottom: 40px"
											>
												<tbody>
													<tr>
														<td style="padding: 5px 0">Tanggal</td>
														<td align="right" style="padding: 5px 0">
															{{ dataInvoice.tanggalMasuk }} sampai
															{{ dataInvoice.tanggalKeluar }}
														</td>
													</tr>
													<tr>
														<td style="padding: 5px 0">Jumlah Pemesanan</td>
														<td align="right" style="padding: 5px 0">
															{{ dataInvoice.jumlahPesanan }}
														</td>
													</tr>
													<tr>
														<td style="padding: 5px 0">Total Harga</td>
														<td align="right" style="padding: 5px 0">
															{{ dataInvoice.totalHarga }}
														</td>
													</tr>
													<tr>
														<td
															style="
																border-bottom: 2px solid #000;
																border-top: 2px solid #000;
																font-weight: bold;
																padding: 5px 0;
															"
														>
															Total Semua Harga
														</td>
														<td
															align="right"
															style="
																border-bottom: 2px solid #000;
																border-top: 2px solid #000;
																font-weight: bold;
																padding: 5px 0;
															"
														>
															{{ dataInvoice.totalHarga }}
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td width="5px" style="padding: 0"></td>
					</tr>

					<tr style="color: #666; font-size: 12px">
						<td width="5px" style="padding: 10px 0"></td>
						<td
							style="
								clear: both;
								display: block;
								margin: 0 auto;
								max-width: 600px;
								padding: 10px 0;
							"
						>
							<table
								width="100%"
								cellspacing="0"
								style="border-collapse: collapse"
							>
								<tbody>
									<tr>
										<td width="40%" valign="top" style="padding: 10px 0">
											<h4 style="margin: 0">Questions?</h4>
											<p
												style="
													color: #666;
													font-size: 12px;
													font-weight: normal;
													margin-bottom: 10px;
												"
											>
												Please visit our
												<a href="#" style="color: #666" target="_blank">
													Support Center
												</a>
												with any questions.
											</p>
										</td>
										<td width="10%" style="padding: 10px 0">&nbsp;</td>
										<td width="40%" valign="top" style="padding: 10px 0">
											<h4 style="margin: 0">
												<span class="il">Bootdey</span> Technologies
											</h4>
											<p
												style="
													color: #666;
													font-size: 12px;
													font-weight: normal;
													margin-bottom: 10px;
												"
											>
												<a href="#"
													>535 Mission St., 14th Floor San Francisco, CA
													94105</a
												>
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td width="5px" style="padding: 10px 0"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "invoiceApp",
		data() {
			return {
				dataInvoice: {
					id: "",
					nama: "",
					tanggalMasuk: "",
					namaGedung: "",
					jumlahPesanan: "",
					totalHarga: "",
					tanggalKeluar: "",
					nomorHp: "",
					tanggalSekarang: "",
				},
			};
		},
		mounted() {
			const data = JSON.parse(localStorage.getItem("invoice"));
			// console.log(data);
			if (!data) {
				this.$router.push("/beranda");
				localStorage.removeItem("invoice");
			} else {
				this.dataInvoice = {
					id: data.id,
					nama: data.nama,
					tanggalMasuk: data.tanggalMasuk,
					namaGedung: data.namaGedung,
					jumlahPesanan: data.jumlahPesanan,
					totalHarga: data.totalHarga,
					tanggalKeluar: data.tanggalKeluar,
					nomorHp: data.nomorHp,
					tanggalSekarang: data.tanggalSekarang,
				};
			}
			console.log(this.dataInvoice);
			localStorage.removeItem("invoice");
		},
	};
</script>

<style scoped>
	body {
		background-color: #e5e5e5 !important;
	}
	/* .whiteSpace{
  display: block;
  padding-bottom:25%;
} */
	.footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
		background-color: #0e562d;
		color: white;
		margin-bottom: 0px;
	}
</style>
