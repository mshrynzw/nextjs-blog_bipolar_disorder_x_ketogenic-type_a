"use client";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as dat from "lil-gui";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";

const Page: NextPage = () => {
  const canvasRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLElement;
    if (!canvas) return;
    canvasRef.current = canvas;

    const gui = new dat.GUI({ width: 300 });
    gui.show(false);

    const scene = new THREE.Scene();

    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };

    // Camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // フルスクリーンクワッド
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(sizes.width, sizes.height) },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const timer = new THREE.Timer();
    timer.connect(document);
    const render = (time: number) => {
      timer.update(time);
      material.uniforms.uTime.value = timer.getElapsed();

      window.requestAnimationFrame(render);
      renderer.render(scene, camera);
    };
    window.requestAnimationFrame(render);

    // ブラウザのリサイズ操作
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      material.uniforms.uResolution.value.set(sizes.width, sizes.height);
    };
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      timer.disconnect();
      timer.dispose();
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("mousemove", handleMouseMove)
    };
  }, []);

  return (
    <>
      <canvas
        id="canvas"
        className="fixed top-0 left-0 min-h-screen min-w-screen -z-10"
      />
    </>
  );
};

export default Page;
