<template>
  <div :class="[`download-pdf`, className || ``]">
    <div class="download-pdf-1 valign-text-middle sourceserifpro-normal-white-18px">Download PDF</div>
  </div>
</template>

<script>
export default {
  name: "DownloadPdf",
  props: ["className"],
};
</script>

<style>
.download-pdf {
  background-color: var(--navy-blue);
  border-radius: 10px;
  display: flex;
  height: 30px;
  justify-content: center;
  left: 152px;
  position: absolute;
  top: 0;
  width: 136px;
}

.download-pdf-1 {
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 120px;
}

.download-pdf.download-pdf-2 {
  left: unset;
  position: relative;
  top: unset;
}
</style>
