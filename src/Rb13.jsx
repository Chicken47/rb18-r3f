import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useControls } from "leva";
import { ScrollTrigger } from "gsap/all";

export const Model = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/rb13.glb");
  const { scene, camera } = useThree();
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: {
  //       x: 0,
  //       y: 0,
  //       z: 5,
  //     },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.05,
  //   },

  //   sceneRotation: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  // });

  // useFrame(() => {
  //   camera.position.x = cameraPosition.x;
  //   camera.position.y = cameraPosition.y;
  //   camera.position.z = cameraPosition.z;
  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;
  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    let ctx = gsap.context(() => {
      tl.to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 4.35,
          duration: 2,
        },
        "1"
      );
      tl.to(
        scene.rotation,
        {
          x: 0.1,
          y: 0,
          z: 0,
          duration: 2,
        },
        "1"
      );
      tl.to(camera.position, {
        x: 4.7,
        y: 0,
        z: 3.5,
        markers: true,
        scrollTrigger: {
          trigger: "#driver-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
        },
      });
      tl.to(scene.position, {
        x: 3.6,
        y: 0.75,
        z: 0,
        markers: true,
        scrollTrigger: {
          trigger: "#driver-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
        },
      });
      tl.to(scene.rotation, {
        x: 0.33,
        y: -0.08,
        z: 0,
        markers: true,
        scrollTrigger: {
          trigger: "#driver-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
        },
      });
      tl.to(camera.position, {
        x: 0,
        y: -0.35,
        z: 3.1,
        markers: true,
        scrollTrigger: {
          trigger: ".newey-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
        },
      });
      tl.to(scene.position, {
        x: -0.25,
        y: -1,
        z: 0,
        markers: true,
        scrollTrigger: {
          trigger: ".newey-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
        },
      });
      tl.to(scene.rotation, {
        x: 0,
        y: 1.64,
        z: 0,
        markers: true,
        scrollTrigger: {
          trigger: ".newey-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          immediateRender: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.526}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Spoiler_Ana_Spoiler_Ana_0.geometry}
            material={materials.Spoiler_Ana}
          />
          <mesh
            geometry={nodes.Kanard_Kanard_0.geometry}
            material={materials.Kanard}
          />
          <mesh
            geometry={nodes.Torus_001_Torus_001_0.geometry}
            material={materials.Torus_001}
          />
          <mesh
            geometry={nodes.Swan_Neck_Swan_Neck_0.geometry}
            material={materials.Swan_Neck}
          />
          <mesh
            geometry={nodes.Spoiler_Spoiler_0.geometry}
            material={materials.Spoiler}
          />
          <mesh
            geometry={nodes.Spoiler_Kucuk_1_Spoiler_Kucuk_1_0.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Spoiler_Kucuk_2_Spoiler_Kucuk_2_0.geometry}
            material={materials.Spoiler_Kucuk_2}
          />
          <mesh
            geometry={nodes.Spoiler_DRS_Pistonu_Spoiler_DRS_Pistonu_0.geometry}
            material={materials.Spoiler_DRS_Pistonu}
          />
          <mesh
            geometry={nodes.Dikey_Kanat_Dikey_Kanat_0.geometry}
            material={materials.Dikey_Kanat}
          />
          <mesh
            geometry={nodes.Kucuk_Kanat_Kucuk_Kanat_0.geometry}
            material={materials.Kucuk_Kanat}
          />
          <mesh
            geometry={nodes.Yatay_Kanat_Yatay_Kanat_0.geometry}
            material={materials.Yatay_Kanat}
          />
          <mesh
            geometry={nodes.Yatay_Kanatlar_Yatay_Kanatlar_0.geometry}
            material={materials.Yatay_Kanatlar}
          />
          <mesh
            geometry={nodes.Dikey_Kanat_001_Dikey_Kanat_001_0.geometry}
            material={materials.Dikey_Kanat_001}
          />
          <mesh
            geometry={nodes.C_Karbon_C_Karbon_0.geometry}
            material={materials.C_Karbon}
          />
          <mesh
            geometry={nodes["D��z_Karbon_2_D��z_Karbon_2_0"].geometry}
            material={materials.Dz_Karbon_2}
          />
          <mesh
            geometry={nodes.Cylinder_008_Cylinder_008_0.geometry}
            material={materials.Cylinder_008}
          />
          <mesh
            geometry={nodes.Difransiyel_Difransiyel_0.geometry}
            material={materials.Difransiyel}
          />
          <mesh
            geometry={nodes["��asi_��asi_0"].geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Cylinder_Cylinder_0.geometry}
            material={materials.Cylinder}
          />
          <mesh
            geometry={nodes.Egzos_Egzos_0.geometry}
            material={materials.Egzos}
          />
          <mesh
            geometry={nodes.Cylinder_001_Cylinder_001_0.geometry}
            material={materials.Cylinder_001}
          />
          <mesh
            geometry={nodes.Cylinder_005_Cylinder_005_0.geometry}
            material={materials.Cylinder_005}
          />
          <mesh
            geometry={nodes.Cylinder_006_Cylinder_006_0.geometry}
            material={materials.Cylinder_006}
          />
          <mesh
            geometry={nodes["��n_Disk_��n_Disk_0"].geometry}
            material={materials.n_Disk}
          />
          <mesh
            geometry={nodes["��amurluk_��amurluk_0"].geometry}
            material={materials.amurluk}
          />
          <mesh
            geometry={nodes.Direksiyon_Direksiyon_0.geometry}
            material={materials.Direksiyon}
          />
          <mesh
            geometry={nodes.Cube_Cube_0.geometry}
            material={materials.Cube}
          />
          <mesh
            geometry={nodes.Kulaklar_Kulaklar_0.geometry}
            material={materials.Kulaklar}
          />
          <mesh
            geometry={nodes.Direksiyon_Mili_Direksiyon_Mili_0.geometry}
            material={materials.Direksiyon_Mili}
          />
          <mesh
            geometry={nodes.Bujon_Bujon_0.geometry}
            material={materials.Bujon}
          />
          <mesh
            geometry={nodes.Jant_Jant_0.geometry}
            material={materials.Jant}
          />
          <mesh
            geometry={nodes.Lastik_Lastik_0.geometry}
            material={materials.Lastik}
          />
          <mesh
            geometry={nodes["����_Jant_����_Jant_0"].geometry}
            material={materials.Jant_32}
          />
          <mesh
            geometry={nodes["Lastik_Kapa����_Lastik_Kapa����_0"].geometry}
            material={materials.Lastik_Kapa}
          />
          <mesh
            geometry={nodes.Bujon_001_Bujon_001_0.geometry}
            material={materials.Bujon_001}
          />
          <mesh
            geometry={nodes.Jant_001_Jant_001_0.geometry}
            material={materials.Jant_001}
          />
          <mesh
            geometry={nodes.Lastik_001_Lastik_001_0.geometry}
            material={materials.Lastik_001}
          />
          <mesh
            geometry={
              nodes["Lastik_Kapa����_001_Lastik_Kapa����_001_0"].geometry
            }
            material={materials.Lastik_Kapa_001}
          />
          <mesh
            geometry={nodes["����_Jant_001_����_Jant_001_0"].geometry}
            material={materials.Jant_001_38}
          />
          <mesh
            geometry={nodes["K��sa_��ubuk_K��sa_��ubuk_0"].geometry}
            material={materials.Ksa_ubuk}
          />
          <mesh
            geometry={nodes["Uzun_��ubuk_Uzun_��ubuk_0"].geometry}
            material={materials.Uzun_ubuk}
          />
          <mesh
            geometry={nodes.Ayna_Ayna_0.geometry}
            material={materials.Ayna}
          />
          <mesh
            geometry={nodes.Alt_Kanard_Alt_Kanard_0.geometry}
            material={materials.Alt_Kanard}
          />
          <mesh
            geometry={nodes.Izgaralar_Izgaralar_0.geometry}
            material={materials.Izgaralar}
          />
          <mesh
            geometry={nodes.Kabin_Kabin_0.geometry}
            material={materials.Kabin}
          />
          <mesh
            geometry={nodes.Govde_Govde_0.geometry}
            material={materials.Govde}
          />
          <mesh
            geometry={nodes["��n_Kanatlar_��n_Kanatlar_0"].geometry}
            material={materials.n_Kanatlar}
          />
          <mesh
            geometry={nodes.Govde_001_Govde_001_0.geometry}
            material={materials.Govde_001}
          />
          <mesh
            geometry={nodes.Kilit_Kilit_0.geometry}
            material={materials.Kilit}
          />
          <mesh
            geometry={nodes.Omuz_Kemeri_Omuz_Kemeri_0.geometry}
            material={materials.Omuz_Kemeri}
          />
          <mesh
            geometry={nodes.Bel_Kemeri_Bel_Kemeri_0.geometry}
            material={materials.Bel_Kemeri}
          />
          <mesh
            geometry={nodes.Koltuk_Koltuk_0.geometry}
            material={materials.Koltuk}
          />
          <mesh
            geometry={nodes.Toka_Toka_0.geometry}
            material={materials.Toka}
          />
          <mesh
            geometry={nodes.Toka_001_Toka_001_0.geometry}
            material={materials.Toka_001}
          />
          <mesh
            geometry={nodes.Toka_002_Toka_002_0.geometry}
            material={materials.Toka_002}
          />
          <mesh
            geometry={nodes.Bacak_Kemeri_Bacak_Kemeri_0.geometry}
            material={materials.Bacak_Kemeri}
          />
          <mesh
            geometry={nodes.Lights_Lights_0.geometry}
            material={materials.Lights}
          />
          <mesh
            geometry={nodes["Ayna_Cam��_Ayna_Cam��_0"].geometry}
            material={materials.Ayna_Cam}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/rb13.glb");
